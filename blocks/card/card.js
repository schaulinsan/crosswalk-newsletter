export default function decorate(block) {
  let res = '';

  const { children } = block.children[0].children[0];

  const h2 = children[0];
  if (h2.nodeName === 'H2') {
    const h3 = children[1];
    if (h3.nodeName === 'H3') {
      let count = 2;

      res += `
        <mj-section mj-class="mj-card">
          <mj-column width="100%" align="left" mj-class="mj-card">
            <mj-text>
              <h2>${h2.innerHTML}</h2>
              <h3>${h3.innerHTML}</h3>
            </mj-text>
      `;

      const img = children[2].querySelector('img');
      if (img) {
        count += 1;
        res += `
          <mj-image align="center" src="${img.url}" />
        `;
      }

      [...children].slice(count).forEach((p) => {
        res += `<mj-text>${p.innerHTML}</mj-text>`;
      });

      res += `
        </mj-column>
      </mj-section>
      `;
    }
  }
  return res;
}
