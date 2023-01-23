export default function decorate(block) {
  const h1 = block.querySelector('h1');
  const img = block.querySelector('img');

  // mj-hero has an issue with outlook in mode='fluid-height' https://github.com/mjmlio/mjml/issues/1253
  // the recommendation is to use a section instead
  // the 2nd column is used to give the section a min-height
  const backUrl = new window.URL(`${window.hlx.codeBasePath}/icons/hero-background.png`, window.location.href);
  const logoUrl = new window.URL(`${window.hlx.codeBasePath}/icons/logo.png`, window.location.href);

  return `
    <mj-section mj-class="mj-hero"  background-url="${img.src}"  background-size="cover">
        <mj-column width="100%">
            <mj-section mj-class="mj-hero-content" background-color="linear-gradient(300deg,  rgba(255, 255, 255, 0) 50%, black 50%)">
                <mj-column width="100%" align="left">
                    <mj-image align="left" mj-class="mj-hero-image" src="${logoUrl}" />
                    <mj-text mj-class="mj-hero-text" width="320px">${h1.innerHTML}</mj-text>
                </mj-column>
                <mj-column width="0%">
                <mj-spacer mj-class="mj-hero-min-height" />
            </mj-column>
            </mj-section>
        </mj-column>
      
    </mj-section>
    `;
}
