import template from './sw-cms-six-image-with-title.html.twig'
const { Mixin } = Shopware;

Shopware.Component.register('sw-cms-six-image-with-title', {
    template,

    mixins: [
        Mixin.getByName('cms-element'),
    ],

    data() {
        return {
            editable: true,
            demoValue: '',
        };
    },
    methods: {
        onBlur() {
            this.emitChanges(content);
        },
        onInput(content) {
            this.emitChanges(content);
        },

        emitChanges(content) {
            if (content !== this.element.config.content.value) {
                this.element.config.content.value = content;
                this.$emit('element-update', this.element)
            }
        }


    }
})