import pluralize, { singular } from 'pluralize';

function normalize(slug: string): string {
  return singular(slug).replace(/(-|_|\.)+/g, '_');
}

function urlify(slug: string): string {
  return pluralize(slug).replace('_', '-');
}

const formats = {
  pascal(slug: string): string {
    return slug
      .split('_')
      .map(word => `${word.charAt(0).toUpperCase()}${word.substr(1)}`)
      .join(' ');
  },
  camel(slug: string): string {
    const splitSlug = slug.split('_');

    return [
      splitSlug[0],
      formats.pascal(splitSlug.slice(1).join('_')).replace(' ', ''),
    ].join('');
  },
};

export default class Slug {
  constructor(slug: string = ''): Slug {
    this._original = slug;
    this._normalized = normalize(slug);
  }

  toString(options: { format: string, plural: boolean }): string {
    const { format, plural } = Object.assign(
      { format: 'pascal', plural: false },
      options
    );

    return (plural ? pluralize : singular)(formats[format](this._normalized));
  }

  equals(slug: string): boolean {
    return normalize(slug) === this._normalized;
  }

  slugify(): string {
    return this._normalized;
  }

  urlify(): string {
    return urlify(this._normalized);
  }
}
