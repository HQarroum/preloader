/**
  * Exporting the `preloader` module appropriately given
  * the environment (AMD, Node.js and the browser).
  */
 (function (name, definition) {
    /* istanbul ignore next */
    if (typeof define === 'function' && define.amd) {
      // Defining the module in an AMD fashion.
      define([], definition);
    } else if (typeof module !== 'undefined' && module.exports) {
      module.exports = definition();
    } else {
      const gl       = this;
      const instance = definition();
      const old      = gl[name];

      /**
       * Allowing to scope the module
       * avoiding global namespace pollution.
       */
      instance.noConflict = function () {
          gl[name] = old;
          return instance;
      };
      // Exporting the module in the global
      // namespace in a browser context.
      gl[name] = instance;
    }
 })('preloader', function () {

  let handle      = null;
  const timeout   = 500;
  const preloader = document.querySelector('.preloader');
  const animation = document.querySelector('.animation');

  /**
   * Exporting public functions.
   */
  return {

    /**
     * Shows the preloader.
     */
    show: () => {
      if (preloader.classList.contains('fade-out')) {
        preloader.classList.remove('fade-out');
        preloader.style.display = 'block';
        preloader.style.opacity = 1;
      }
    },

    /**
     * Hides the preloader.
     */
    hide: () => {
      if (!preloader.classList.contains('fade-out')) {
        clearTimeout(handle);
        preloader.classList.add('fade-out');
        handle = setTimeout(() => {
          preloader.style.display = 'none';
        }, timeout);
      }
    }
  };
 });