import { useMeta } from 'quasar';
import { boot } from 'quasar/wrappers';

import { generateMeta } from 'src/services/metaUtils';

export default boot(({ router }) => {
  router.beforeEach((to) => {
    try {
      const { title, description } = (to.meta || {}) as { title?: string; description?: string };

      useMeta(generateMeta(title, description));
    } catch (e) {
      // Could not update locale
    }
  });
});
