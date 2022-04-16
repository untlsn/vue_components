// use it to mount Vue component
import { mount } from '@cypress/vue';
// simply import component (vue components import don't work out of the box)
import Button from '~/components/Button.vue';
// import global css
import '$css';

// tests wrapper
describe('Button', () => {
  // test ITself
  it('work', () => {
    // tuto import and refs work out of the box
    const a = ref('Hello!');

    // components mount by pass name and optional config
    mount(Button, {
      // define default slot like <Button>{{ a.value }}</Button>
      slots: {
        default: {
          render: () => a.value,
        },
      },
      props: {
        // event binding like <Button @click="a.value = 'Clicked!'" />
        onClick: () => {
          a.value = 'Clicked!';
        },
      },
    });
  });
});
