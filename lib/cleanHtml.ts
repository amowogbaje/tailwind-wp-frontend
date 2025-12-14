import React from "react";
import parse, { domToReact, HTMLReactParserOptions, Element } from "html-react-parser";

/**
 * Map Gutenberg block types / WP class prefixes to Tailwind classes
 */
const wpClassMappings: Record<string, string> = {
  // Text blocks
  'wp-block-paragraph': 'mb-4 text-gray-800',
  'wp-block-heading': 'mb-4 font-semibold text-gray-900',
  'wp-block-quote': 'border-l-4 border-gray-300 pl-4 italic text-gray-600 my-6',
  'p': 'mb-4 text-xl text-gray-800 leading-relaxed text-justify',

  'h1': 'text-4xl font-bold my-6',
  'h2': 'text-3xl font-semibold my-5',
  'h3': 'text-2xl font-medium my-4',
  'h4': 'text-xl font-medium my-4',
  'strong': 'font-bold',
  'em': 'italic',
  'a': 'text-blue-600 hover:underline',
  'ul': 'list-disc ml-6 mb-4',
  'ol': 'list-decimal ml-6 mb-4',
  'li': 'mb-2',

  // Images
  'wp-block-image': 'my-4 h-full rounded-lg',
  'img': 'my-4 h-full rounded-lg',

  // Layout / containers
  'wp-block-columns': 'flex flex-wrap -mx-4 mb-6 items-stretch', // stretch children
  'wp-block-column': 'px-4 w-full md:w-1/2 flex flex-col',      // flexible column
  'wp-block-group': 'mb-6 p-4 bg-gray-50 rounded-lg',
  'wp-container-core-columns-is-layout': 'flex flex-wrap -mx-4',
  'is-layout-flex': 'flex',
  'wp-block-cover': 'relative mb-6 overflow-hidden rounded-lg',

  // Buttons
  'wp-block-button': 'inline-block',
  'wp-block-button__link': 'bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition',

  // Separator / Divider
  'wp-block-separator': 'my-6 border-t border-gray-300',

  // Gallery
  'wp-block-gallery': 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6',
};

/**
 * Converts Gutenberg HTML content into React elements with Tailwind classes
 */
export const cleanHtml = (html: string) => {
  const options: HTMLReactParserOptions = {
    replace: (domNode) => {
      if (!(domNode instanceof Element)) return;

      if (domNode.attribs) {
        let appliedClass = '';

        // Handle dynamic WP class prefixes
        if (domNode.attribs.class) {
          const classes = domNode.attribs.class.split(' ');

          for (const c of classes) {
            // Match prefix
            for (const prefix in wpClassMappings) {
              if (c.startsWith(prefix)) {
                appliedClass = wpClassMappings[prefix];
                break;
              }
            }
            if (appliedClass) break;
          }
        }

        // Fallback to tag name mapping
        if (!appliedClass && wpClassMappings[domNode.name]) {
          appliedClass = wpClassMappings[domNode.name];
        }

        if (appliedClass) {
          domNode.attribs.className = appliedClass;
        }

        // Remove original class & style
        delete domNode.attribs.class;
        delete domNode.attribs.style;
      }

      // Recursively render children
      if (domNode.children && domNode.children.length > 0) {
        return React.createElement(
          domNode.name,
          domNode.attribs,
          domToReact(domNode.children, options)
        );
      }
    },
  };

  return parse(html, options);
};


// lib/stripHtml.ts
export const stripHtml = (html = ""): string => {
  let text = html.replace(/<[^>]*>/g, "").trim();

  // Replace WordPress excerpt ellipsis token
  text = text.replace(/\[\s*&hellip;\s*\]/g, "...");

  // Decode common entities
  text = text
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'");

  return text;
};
