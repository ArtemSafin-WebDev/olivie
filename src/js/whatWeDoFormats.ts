export default function whatWeDoFormats() {
  const elements = Array.from(
    document.querySelectorAll<HTMLElement>(".what-we-do-formats")
  );
  elements.forEach((element) => {
    const cards = Array.from(
      element.querySelectorAll<HTMLElement>(".formats__card")
    );
    cards.forEach((card) => {
      const container = card.querySelector<HTMLElement>(".formats__card-tags");
      if (!container) return;
      const items = Array.from(container.children) as HTMLElement[];
      function detectLineBreaks() {
        // Track which items are on which line
        const lines: Array<HTMLElement[]> = [];
        let currentLine = 0;
        let prevTop = -1;

        items.forEach((item) => {
          const rect = item.getBoundingClientRect();

          if (prevTop !== -1 && rect.top > prevTop) {
            // This item is on a new line
            currentLine++;
          }

          if (!lines[currentLine]) {
            lines[currentLine] = [];
          }

          lines[currentLine].push(item);
          prevTop = rect.top;
        });

        console.log("Lines", lines);

        // Now 'lines' contains arrays of elements grouped by the line they appear on
        return lines;
      }

      const resizeObserver = new ResizeObserver((_entries) => {
        const lines = detectLineBreaks();

        lines.forEach((line) => {
          line.forEach((item) => item.classList.remove("last"));
          line[line.length - 1]?.classList.add("last");
        });
      });

      resizeObserver.observe(container);
    });
  });
}
