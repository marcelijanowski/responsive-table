# responsive-table
Responsive table as technical test.
As this is only demo technical I'm not using any prepocessor like sass, less.
Solution was manually tested on **Browserstack**.

### Demo
https://marcelijanowski.github.io/responsive-table/

### External library:
1. **Selectivizr** is a JavaScript utility that emulates CSS3 pseudo-classes and attribute selectors in Internet Explorer 6-8.
2. **Respond** is fast & lightweight polyfill for min/max-width CSS3 Media Querie

### Question:
1. What is break point for mobile. In my solution I took 740px.
2. What about AJAX call - inside test there is not mention to use create it or not. If I have to use it I would probably use pollyfill for fetch method with handlebars as templating enginee.
3. Would be nice to have wireframe with all information about padding, margin as for example "Leading" I treated as **margin** from top and can be also **line-height**

### What requirements should be
1. Obligatory solution for IE6 - IE9 should be dropped (convince product owner ...) as for:
  * Number of user dropping and there is not longer support
  * For old browser we need to use polyfills and hacks which maybe break or cause unsuspected behavior in "proper" web browser
  * Time needed for developers and tester to create functionality and support old web browsers.
  * We can always use progressive enhancement to support old web browsers. Old web browser will display proper content but not going to be pixel and design perfect as in newest web browsers.
2. Breakpoints for different devices should be defined as "mobile" is not very accurate word.
3. Using responsive design on web browsers like IE6-IE9 doesn't really have seans as you have to run them on mobile devices and not current device use them
4. There is no requirements about accesibilty?
5. As developer I should get full spec of page as wireframes and padding/magin/font-size . If there isn't any there should be general style guid. Is more for testers/developer to be able to pass
   ticket on proper requirements .
6. There is mobile view but there is not requirement about operating system on device and device grid which should be tested agains. Most of problem are with Samsung Android >4.1 phone as Samsung put
   is own web browser by default.
