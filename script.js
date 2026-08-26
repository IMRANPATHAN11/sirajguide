/* ==========================================================================
   SIRAJ SHAIKH TOUR GUIDE - JAVASCRIPT
   Interactive Features, WhatsApp Booking Generator & Smooth UI
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Navigation Scroll Effect
  const header = document.querySelector('.main-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // 2. Mobile Navigation Toggle
  const mobileToggle = document.getElementById('mobileToggle');
  const mobileMenu = document.getElementById('mobileNavMenu');
  
  if (mobileToggle && mobileMenu) {
    mobileToggle.addEventListener('click', () => {
      mobileMenu.classList.toggle('open');
      const isOpen = mobileMenu.classList.contains('open');
      mobileToggle.innerHTML = isOpen ? '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
    });

    // Close mobile menu when clicking a link
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
        mobileToggle.innerHTML = '<i class="fas fa-bars"></i>';
      });
    });
  }

  // 3. Attractions Filtering
  const filterBtns = document.querySelectorAll('.filter-btn');
  const attractionCards = document.querySelectorAll('.attraction-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterCategory = btn.getAttribute('data-filter');

      attractionCards.forEach(card => {
        if (filterCategory === 'all' || card.getAttribute('data-category') === filterCategory) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 50);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(20px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 300);
        }
      });
    });
  });

  // 4. FAQ Accordion Toggle
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      
      // Close all other FAQ items
      faqItems.forEach(otherItem => {
        otherItem.classList.remove('active');
      });

      // Toggle clicked item
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });

  // 5. Image Lightbox for Gallery Photos
  const lightboxModal = document.getElementById('lightboxModal');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxClose = document.getElementById('lightboxClose');
  const clickableImages = document.querySelectorAll('.photo-card img, .hero-main-img');

  clickableImages.forEach(img => {
    img.addEventListener('click', () => {
      if (lightboxModal && lightboxImg) {
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt || 'Siraj Shaikh Tour Guide';
        lightboxModal.classList.add('active');
      }
    });
  });

  if (lightboxClose) {
    lightboxClose.addEventListener('click', () => {
      lightboxModal.classList.remove('active');
    });
  }

  if (lightboxModal) {
    lightboxModal.addEventListener('click', (e) => {
      if (e.target === lightboxModal) {
        lightboxModal.classList.remove('active');
      }
    });
  }

  // 6. Interactive WhatsApp Booking Inquiry Form
  const bookingForm = document.getElementById('bookingForm');

  if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('fullName').value.trim();
      const phone = document.getElementById('phoneNum').value.trim();
      const travelDate = document.getElementById('travelDate').value;
      const guests = document.getElementById('guestCount').value;
      const language = document.getElementById('prefLanguage').value;
      const notes = document.getElementById('specialNotes').value.trim();

      // Collect selected destinations
      const selectedDests = [];
      const checkboxes = document.querySelectorAll('input[name="destinations"]:checked');
      checkboxes.forEach(cb => {
        selectedDests.push(cb.value);
      });

      const destString = selectedDests.length > 0 ? selectedDests.join(', ') : 'All Major Heritage Sites';

      // Build structured WhatsApp Message
      let waMessage = `*Tour Guide Booking Inquiry - Siraj Shaikh*\n\n`;
      waMessage += `👤 *Name:* ${name}\n`;
      waMessage += `📞 *Contact:* ${phone}\n`;
      waMessage += `📅 *Travel Date:* ${travelDate || 'Not specified'}\n`;
      waMessage += `👥 *Number of Guests:* ${guests}\n`;
      waMessage += `🗣️ *Preferred Language:* ${language}\n`;
      waMessage += `🏛️ *Interested Sites:* ${destString}\n`;
      if (notes) {
        waMessage += `📝 *Special Requests:* ${notes}\n`;
      }
      waMessage += `\nHello Siraj ji, I would like to check your availability and package rates for guiding us. Thank you!`;

      // Open WhatsApp directly
      const waUrl = `https://wa.me/919860458313?text=${encodeURIComponent(waMessage)}`;
      window.open(waUrl, '_blank');
    });
  }

  // 7. Active Nav Link on Scroll Spy
  const sections = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');
      const navLink = document.querySelector(`.nav-links a[href*="${sectionId}"]`);

      if (navLink) {
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          navLink.classList.add('active');
        } else {
          navLink.classList.remove('active');
        }
      }
    });
  });
});
