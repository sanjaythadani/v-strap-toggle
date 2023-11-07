import { describe, it, expect } from 'vitest';

import { mount } from '@vue/test-utils';
import exampleApp from '../src/example/app.vue';

describe('Example App', () => {
    it('should render properly', () => {
        const wrapper = mount(exampleApp);
        expect(wrapper.text()).toContain('checkbox component');
    });
});
