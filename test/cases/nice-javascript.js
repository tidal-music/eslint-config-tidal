const switchButtonTemplate = '';

const SwitchButton = {
  initialize(options) {
    this.options = options || {};

    this.checked = false;

    if (!this.options.clickHandler) {
      throw new Error('You need to provide a handler. Pass in an object with clickHandler defined.');
    }

    this.clickHandler = this.options.clickHandler;

    this.render();
  },

  /**
   * Disable the use of this button.
   */
  disable() {
    this.$el.addClass('switch-button--disabled');
    this.$switch.attr('disabled', true);
  },

  /**
   * Enable the use of this button.
   */
  enable() {
    this.$el.removeClass('switch-button--disabled');
    this.$switch.attr('disabled', false);
  },

  render() {
    this.$el.html(switchButtonTemplate);
    this.$switch = this.$('input');

    // Add label text to DOM if specified
    if (this.options.labelText) {
      this.$('.js-label-text').text(this.options.labelText);
    }

    /*
      Will enable functionality just like the
      disabled attribute on <button>
    */
    if (this.options.disabled) {
      this.disable();
    }

    this.$('input').on('change', (event) => {
      const enabled = event.target.checked;

      this.clickHandler({ enabled });
    });
  },
};

SwitchButton.initialize();
