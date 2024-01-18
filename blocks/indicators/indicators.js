function trend(t) {
  let res = '<span ';
  if (t === 'up') {
    res += 'class="trend-up">\u25b2';
  } else if (t === 'down') {
    res += 'class="trend-down">\u25bc';
  } else if (t === 'stable') {
    res += 'class="trend-stable">';
  }
  res += '</span>';
  return res;
}

export default function decorate(block) {
  const rows = [...block.children];
  let mjml = `
    <mj-section mj-class="mj-indicators">
  `;
  rows.forEach((row) => {
    mjml += '<mj-column mj-class="mj-indicator">';
    const cells = [...row.children];
    mjml += `<mj-text mj-class="mj-indicator-name">${cells[0].innerHTML}</mj-text>`;
    mjml += `<mj-text mj-class="mj-indicator-value"><span class="indication-value">${trend(cells[3].innerHTML)}${cells[1].innerHTML}<sub>${cells[2].innerHTML}</sub></span></mj-text>`;
    mjml += '</mj-column>';
  });
  mjml += `
    </mj-section>
    <mj-divider mj-class="mj-section-divider" border-width="1px" border-color="rgb(230,230,230)" width="30%" />
  `;
  return mjml;
}
