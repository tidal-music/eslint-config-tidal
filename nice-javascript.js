var switchButtonTemplate = ''
  , SwitchButton = {
    initialize: function (options) {
      this.options = options || {};

      this.checked = false;

      if (!this.options.clickHandler) {
        throw new Error('You need to provide a handler. Pass in an object with clickHandler defined.');
      }

      this.clickHandler = this.options.clickHandler;

      this.render();
    },

    onSwitchButtonChange: function (event) {
      this.clickHandler({
        enabled: event.target.checked
      });
    },

    /**
     * Disable the use of this button.
     */
    disable: function () {
      this.$el.addClass('switch-button--disabled');
      this.$switch.attr('disabled', true);
    },

    /**
     * Enable the use of this button.
     */
    enable: function () {
      this.$el.removeClass('switch-button--disabled');
      this.$switch.attr('disabled', false);
    },

    render: function () {
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

      this.$('input').on('change', this.onSwitchButtonChange.bind(this));
    }
  };

SwitchButton.initialize();
