'use client';
import { useEffect, RefObject } from 'react';

const BASE_OFFSET_HEIGHT = 48; // 2 lines of text
const elementToAdd = "...";

/**
 * Checks if the text fits within the given element's height.
 * @param {string} slicedString - The truncated string.
 * @param {HTMLElement} nodeObj - The HTML element to check.
 * @returns {boolean} - True if the text fits, false otherwise.
 */
function isTextFitsOnGivenLine(slicedString: string, nodeObj: HTMLElement): boolean {
  nodeObj.textContent = slicedString + elementToAdd;
  return nodeObj.offsetHeight <= BASE_OFFSET_HEIGHT;
}

/**
 * Checks if the given object is empty.
 * @param {Record<string, unknown>} obj - The object to check.
 * @returns {boolean} - True if the object is empty, false otherwise.
 */
function isEmptyObject(obj: Record<string, unknown>): boolean {
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      return false;
    }
  }
  return true;
}

/**
 * Truncates the text to fit within the given element's height.
 * @param {HTMLElement} nodeObj - The HTML element containing the text.
 * @param {{ text: string | undefined, length: number | undefined }} textAndLength - The text and its length.
 */
function truncateTextToFit(nodeObj: HTMLElement, textAndLength: { text: string | undefined, length: number | undefined }): void {
  if (isEmptyObject(textAndLength)) {
    return;
  }
  for (let index = textAndLength.length!; index > 1; index--) {
    const slicedString = textAndLength.text!.slice(0, index);
    if (isTextFitsOnGivenLine(slicedString, nodeObj)) {
      break;
    }
  }
}

/**
 * Gets the text content and its length from the given HTML element.
 * @param {HTMLElement | null} nodeObj - The HTML element.
 * @returns {{ text: string | undefined, length: number | undefined }} - The text content and its length.
 */
function getTextAndLength(nodeObj: HTMLElement | null): { text: string | undefined, length: number | undefined } {
  if (nodeObj === null) {
    return { text: undefined, length: undefined };
  }
  return {
    text: nodeObj.textContent?.trim(),
    length: nodeObj.textContent?.trim()?.length
  };
}

/**
 * Custom hook to truncate text within a referenced HTML element.
 * @param {RefObject<HTMLElement>} ref - The reference to the HTML element.
 */
export function useTruncateText(ref: RefObject<HTMLElement>): void {
  useEffect(() => {
    const el = ref.current;
    if (el) {
      const itemOffsetHeight = el.offsetHeight;

      if (itemOffsetHeight > BASE_OFFSET_HEIGHT) {
        const headlineTextAndLength = getTextAndLength(el);
        truncateTextToFit(el, headlineTextAndLength);
      }
    }
  }, [ref]);
}

