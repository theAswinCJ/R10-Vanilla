var outerScroll = document.querySelector('#body');
var innerScroll = document.querySelector('#featuresList');

console.log("outerScroll",outerScroll);
console.log("innerScroll",innerScroll);

// outerScroll.addEventListener('scroll', function(event) {
//   if (outerScroll.scrollTop + outerScroll.offsetHeight >= outerScroll.scrollHeight) {
//     // Outer scroll has reached the bottom
//     // Scroll the inner scroll
//     innerScroll.scrollTop = innerScroll.scrollHeight;
//     console.log("scroll fn 1 entered");
//   }
// });

// innerScroll.addEventListener('scroll', function(event) {
//   if (innerScroll.scrollTop === 0) {
//     // Inner scroll has reached the top
//     // Scroll the outer scroll to the top
//     outerScroll.scrollTop = 0;
//     console.log("scroll fn 2 entered");
//   }
// });

outerScroll.addEventListener('scroll', function(event) {
    if (outerScroll.scrollTop >= outerScroll.scrollHeight - outerScroll.offsetHeight) {
      // Outer scroll has reached the bottom
      // Scroll the inner scroll to its top
      innerScroll.scrollTop = 0;
      // Disable outer scroll temporarily
      outerScroll.style.overflow = 'hidden';

    console.log("scroll fn 1 entered");
    } else {
      // Enable outer scroll
      outerScroll.style.overflow = 'scroll';

    console.log("scroll fn 2 entered");
    }
  });
  
  innerScroll.addEventListener('scroll', function(event) {
    if (innerScroll.scrollTop === 0) {
      // Inner scroll has reached the top
      // Scroll the outer scroll to its bottom
      outerScroll.scrollTop = outerScroll.scrollHeight;
      // Disable inner scroll temporarily
      innerScroll.style.overflow = 'hidden';

    console.log("scroll fn 3 entered");
    } else {
      // Enable inner scroll
      innerScroll.style.overflow = 'scroll';
          console.log("scroll fn 4 entered");
    }
  });