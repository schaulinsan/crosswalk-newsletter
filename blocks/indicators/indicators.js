export default function decorate(block) {
  let mjml = `
    <mj-section mj-class="mj-indicators">
      <mj-column>
        <mj-table>
`;
  const rows = [...block.children];

  // indicator name
  mjml += '<tr class="indicator-name">';
  rows.forEach((row) => {
    const cells = [...row.children];
    mjml += `<td>${cells[0].innerHTML}</td>`;
  });
  mjml += '</tr>';

  // indicator value
  mjml += '<tr class="indicator-value">';
  rows.forEach((row) => {
    const cells = [...row.children];
    mjml += `<td>${cells[1].innerHTML}<sub>${cells[2].innerHTML}</sub></td>`;
  });
  mjml += '</tr>';



  mjml += `
        </mj-table>
      </mj-column>
    </mj-section>
    <mj-divider mj-class="mj-section-divider" border-width="1px" border-color="rgb(230,230,230)" width="30%" />


`;
  return mjml;
}