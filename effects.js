const animateElements = () => {
    const sections = document.querySelectorAll('.page-section');
    const options = {
        rootMargin: '-50% 0px -50% 0px', // adjust root margin as needed
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.querySelectorAll('.animate-slide').forEach((el) => {
                    el.classList.add('active');
                });
                entry.target.querySelectorAll('.animate-slide-1').forEach((el) => {
                    el.classList.add('active');
                });
                entry.target.querySelectorAll('.animate-slide-2').forEach((el) => {
                    el.classList.add('active');
                });
            } else {
                entry.target.querySelectorAll('.animate-slide').forEach((el) => {
                    el.classList.remove('active');
                });
                entry.target.querySelectorAll('.animate-slide-1').forEach((el) => {
                    el.classList.remove('active');
                });
                entry.target.querySelectorAll('.animate-slide-2').forEach((el) => {
                    el.classList.remove('active');
                });
            }
        });
    }, options);
    
    sections.forEach((section) => {
        observer.observe(section);
    });
  };
  
  // Call animateElements on page load and on window scroll or resize
  window.addEventListener('load', animateElements);
  window.addEventListener('scroll', animateElements);
  window.addEventListener('resize', animateElements);
  