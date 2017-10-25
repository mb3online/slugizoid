import pluralize, { singular } from 'pluralize';

function normalize(slug: string): string {
  return singular(slug.toLowerCase()).replace(/(-|_|\.|\s)+/g, '_');
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

export default function slugizoid(slug: string = ''): string {
  const _original = slug;
  const _normalized = normalize(slug);

  return {
    toString(options: { format: 'pascal' | 'camel', plural: boolean }): string {
      const { format, plural } = Object.assign(
        { format: 'pascal', plural: false },
        options
      );

      return (plural ? pluralize : singular)(formats[format](_normalized));
    },

    equals(slug: string): boolean {
      return normalize(slug) === _normalized;
    },

    slugify(): string {
      return _normalized;
    },

    urlify(): string {
      return urlify(_normalized);
    },
  };
}
