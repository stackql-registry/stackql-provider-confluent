import {themes as prismThemes} from 'prism-react-renderer';
import { createConfig } from './.shared-config/index.js';
import { providerName, providerTitle } from './provider.js';

const config = createConfig({
  providerName,
  providerTitle,
  prismThemes,
  overrides: {
    // Docusaurus Faster (rspack + swc, via @docusaurus/faster), consistent
    // with the other provider microsites.
    future: {
      v4: true,
      faster: true,
    },
  },
});

// Both the confluent and kafka microsites are mastered in the
// stackql-provider-confluent monorepo, so the shared config's providerRepo
// derivation (stackql-provider-<name>) and its edit link do not apply here.
config.projectName = 'stackql-provider-confluent';
config.presets[0][1].docs.editUrl =
  'https://github.com/stackql-registry/stackql-provider-confluent/edit/main/website/kafka/';

// Use the locally vendored registry-branded logos (STACKQL>> | REGISTRY)
// instead of the shared config's hotlinked main-site wordmark -
// self-contained assets, no cross-origin fetch. global.css swaps in the
// -mobile variants below 996px.
const registryLogo = {
  alt: 'StackQL',
  href: '/',
  src: 'img/stackql-registry-logo.svg',
  srcDark: 'img/stackql-registry-logo-white.svg',
};
config.themeConfig.navbar.logo = { ...registryLogo };
config.themeConfig.footer.logo = { ...registryLogo };

// Social card: this site's own featured image (kept from the self-contained
// config) rather than the shared default.
config.themeConfig.image = '/img/stackql-confluent-provider-featured-image.png';

// Date-stamp every doc page ("Last updated on ..."). The pages are
// regenerated and committed on every provider refresh, so the stamp is the
// regeneration date.
config.presets[0][1].docs.showLastUpdateTime = true;

// URL form. Keep the Docusaurus default (pages emitted as <route>/index.html)
// regardless of the shared config's trailingSlash setting, so the host
// serves both /services/x/y and /services/x/y/. A trailingSlash: false site
// emits <route>.html instead, which returns 404 for the trailing-slash URL.
delete config.trailingSlash;

export default config;
