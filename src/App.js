import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import CommunityList from '../src/components/communityList/communityList';
import FeatureList from '../src/components/featureList/featureList';
import WhyList from '../src/components/whyList/whyList';
import TestimonialList from '../src/components/testimonialList/testimonialList';

class App extends React.Component {
  state = {
    communitySection: {
      heading: 'Creating spaces to create great communities',
      subHeading: 'Connect in spaces designed to bring incredible people together. Find yourself in one of our events.',
      communites: [
        {
          image: 'https://images.freeimages.com/images/large-previews/bfd/clouds-1371838.jpg',
          name: 'Casual Friday Drinks',
          description: 'Get ready for weekend! Enjoy your Friday night by joining us for late night drinks & acoustic at BaxterSmith Senopati. First round is on us!',
          date: 'Friday, 29th November 2019 (8.30pm)',
          location: 'Baxster Smith, Senopati',
          highlights: 'Upcoming'
        },
        {
          image: 'https://images.freeimages.com/images/large-previews/bfd/clouds-1371838.jpg',
          name: 'WTF FRIDAY',
          description: "Unwind after a whole week of work because it's Friday, or as we call it WTF Friday. We'll be at Up in Smoke, Mega Kuningan having drinks, with live music and some good talks.",
          date: 'Saturday, 25th October 2019 (7 pm)',
          location: 'Up in Smoke, Mega Kuningan',
          highlights: 'Past event'
        },
        {
          image: 'https://images.freeimages.com/images/large-previews/bfd/clouds-1371838.jpg',
          name: 'Weekend Burn',
          description: "Lets sweat it out !! \n Join us for a Muay Thai session at Ultima Muaythai in Kuningan, and burn those weekend carbs ;)",
          date: 'Sunday,  22nd September  2019 (12pm )',
          location: 'Ultima Muaythai, Kuningan',
          highlights: 'Past event'
        }
      ]
    },
    featuresSection: {
      heading: 'Stay connected and live smart with Flokq App',
      subHeading: "With the Flokq app, you can seamlessly stay connected with fellow Flokqers, get notified for upcoming events and updates you've missed. All at your fingertips!",
      features: [
        {
          image: "https://static.wixstatic.com/media/e0d90c_fae8d2b74b954497b113f3db4da01ae0~mv2.png/v1/crop/x_0,y_8,w_852,h_1105/fill/w_292,h_372,al_c,q_80,usm_0.66_1.00_0.01/Screenshot%202019-06-06%20at%203_51_45%20PM_ipho.webp",
          name: "Community",
          description: "You now have the opportunity to explore and discover groups. Meet up with people who love what you love and get the conversation going so you can do more of what you like."
        },
        {
          image: "https://static.wixstatic.com/media/e0d90c_fae8d2b74b954497b113f3db4da01ae0~mv2.png/v1/crop/x_0,y_8,w_852,h_1105/fill/w_292,h_372,al_c,q_80,usm_0.66_1.00_0.01/Screenshot%202019-06-06%20at%203_51_45%20PM_ipho.webp",
          name: "Chat",
          description: "Through our App’s Chat feature, connecting with housemates and meeting new friends has never been easier. Flokqers can message each other personally so no more awkward moments."
        },
        {
          image: "https://static.wixstatic.com/media/e0d90c_2eeedaa1dab64d8ab0dca0a5512c105f~mv2.png/v1/crop/x_0,y_344,w_882,h_1143/fill/w_292,h_372,al_c,q_80,usm_0.66_1.00_0.01/Screenshot%202019-06-10%20at%202_35_09%20PM_ipho.webp",
          name: "Events",
          description: "With the Flokq app, you can stay up to date on the upcoming events happening near you and also see who’s going to them!"
        },
        {
          image: "https://static.wixstatic.com/media/e0d90c_7736174398824f8f8dab837e7f754633~mv2.png/v1/crop/x_0,y_223,w_871,h_1130/fill/w_292,h_372,al_c,q_80,usm_0.66_1.00_0.01/Screenshot%202019-06-10%20at%202_02_03%20PM_ipho.webp",
          name: "Housekeeping",
          description: "Can’t find the time to get things done around the house? Don't worry Housekeep and fixing can be scheduled easily within minutes. It's on the house!"
        }
      ]
    },
    whySection: {
      heading: "Why Flokq with us?",
      subHeading: "Our aim is to make your stay hassle-free and your experience amazing. Choose to stay in one of our beautiful furnished homes. We offer flexible month to month plans tailored to your requirements.",
      whyData: [
        {
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd0I7Unb4pWr8Ei4asx9k2bp-JM_1c49SwsfOwFmvZLlHAjJyi4w&s',
          name: "Affordable",
          description: "Be it rentals, laundry, or even a few drinks at our community events, we cover it all in our all inclusive month by month rental plan."
        },
        {
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd0I7Unb4pWr8Ei4asx9k2bp-JM_1c49SwsfOwFmvZLlHAjJyi4w&s',
          name: "Flexible",
          description: "We are aware that at times nothing goes according to plan. Fret not, our flexible monthly payments allow you to keep pace with your life without ever being locked in. \n Pay one month rental and one month security deposit at the time of move-in. If you're not satisfied there's always to move into one of our other homes."
        },
        {
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd0I7Unb4pWr8Ei4asx9k2bp-JM_1c49SwsfOwFmvZLlHAjJyi4w&s',
          name: "Central",
          description: "Does an extra hour of sleep matter to you? With Flokq, that’s now possible as most of our apartments are located in the central areas. Long gone those rush hour commutes!"
        },
        {
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd0I7Unb4pWr8Ei4asx9k2bp-JM_1c49SwsfOwFmvZLlHAjJyi4w&s',
          name: "Convenient",
          description: "Say goodbye to heavy suitcases when moving in. With Flokq, houses are fully furnished and equipped with essentials for you to live in.  Choose a home that connects with you, ranging from a space that fulfils your everyday essential needs to a premium space with your own balcony to catch the sunset after a hectic day. Trust us, we won’t rent a place to you that we wouldn’t personally stay in either."
        },
        {
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd0I7Unb4pWr8Ei4asx9k2bp-JM_1c49SwsfOwFmvZLlHAjJyi4w&s',
          name: "Community",
          description: "There are many reasons why Flokqers join us, being a part of our extraordinary community is definitely one of them. All Flokqers go through a matching process which lets you find the best housemates as per your needs."
        }
      ]
    },
    testimonialSection: {
      heading: "What Flokqers think about us",
      users: [
        {
          image: "data:image/png;base64,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",
          name: "Zakiah",
          designation: "Community Manager",
          content: "I was looking for a kost and came across something better! I love the idea of sharing a flat without hassle and the sense of community flokqers brings",
          quoteIcon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAYFBMVEX///8AyPoAxvp73vyR4/0y0PuA3/yH4fx23fzH8f0AxPoAyfq57f36///2/f9V1fvs+//R8/6o6f3c9v7D7/0YzPrQ8/5o2fyh5/1U1Pvm+f+N4vy87v3Z9v6X5P0szvqrkbBlAAAFEElEQVR4nO2cDXLiMAyFE1MoJPykUKDQUu5/yw2002Fb4idLlme6+74DaPQcW5ZkO1VFCCGEEEIIIYQQQgghhBBCCCGE/M9s/EwvF362xT6sx82zk+3Zvpk4mRazmdShrtvOwXT3cm7qOrw5mJbzvAq9vt6NVXbTp2l7Ne0zekLm4w8fLhLf85o+fQ7dhXFe03Lm2y8fepqnjKZ3h+bGdHjMaFrO8/hWX892mcv006r523TwCmQRNqtv+no39nlMH/c/TNfb0ktxMfnpRC/xJYfp13DHtkMgi/K2vSew9+PkZzpzIIuynN534jKZjPlHt2+GTIddHu8FzAZG+eqGbSnO22HTGQMZ4HFwlK8S13rLi+EPeDVdZil2h8goX1Hn4KczMJ0lkCF2kRn6yVlpeo0M9xIdK5hP5lBf78ZUZXokMF2fvQupd4kXdZinW17Cyf9hOlNOMcSjyIu+FDimWu6+J4CDEg2BDCOaR1dSS4EOr+4vkkdPzvA2/4MmrRQ4tmLLddg6yauqu4noXR/CYZ4UEI5bub7zu9s3fJUulLBPzE07scBmnDZ0Sayj2caNE/vULWuB9vmvsdt6tmtmMi/CIb22kG0TdWhdo6gsFIStYiMULu8w8k27xxInmqnCCUmSdBk758rpTlPhJ62mk7IRZjLOyZokyoSDZhYtZWHUdQX2bCSjrGu8i5KI1t4ZAQgWobJwe5ZUKmP3JpugnlA2M5eCCB0O7gdPR8E4z3SmBZl8OORVc4+Vm0BBHA1j/6NDnMyoj74EY3cu0F07Q4HaUC4IMyUO1WDKodwmeg5QYJEWMPqE+kiwg5+wKdE7hJ9QP4/gKvRuOn0AP6H6VG8DM8Eix2kz4IayM3oB5mualmQ6aCa16mC+RF+wLnJGcfQb5jX8hEWOfB+AG4ZhRltFeM0nY5gFiDNBf/UCzQ7D/E8B7ViGT4jqlSLHaDD1bwwnXajkLHTaC6o3wyfs0Cd8yKciwi6+GTaGpBFF0jKBFB2lWW6agX22TL5WVfE2mCkWgE+Y9X7cMKACt5RuKEhrLwIkAtaKJakCe0WhOAPWiikvBglNcDzlvWEButGGSYqaiIVuy4JGt6XJdwKTtEhKipahKZKCFW5Id5OIV6iWjA0Vv22h1xXxzLG1mAaBptBNWRANLEkHuJhQqKyoTvFrkJbruuAgxJLvpgACjfKk4sobCDTZNMSJp92m3B9kNKXejsQzGlOBGi+s9acEicSjgelQLx5Kfe8e3hAPNPpGcAWrMssSTwCEUlNeBQJNoacx8XhnmknHeHOkTBsRbhaWzBEcKpcKpWCzsGSl4MCuUIum2ke90L+oqOD0MAWxBEDebSnC44chpYpDENFNFwjitwBL5d1VVKAtpXHs/yTQOSqML4BSBT5o0pjeA4CUxv9h05Un0Gd4HGKCby7EB6+eDtrO+oQUXfUKQzQ4FAKFw7azdsIl9z7vuwfb1Uut6bzZjqNCdHRYSCG8KaFXKLmuWkDhi59C0PAupVD2kPI3K5S+4lIoxFcSiyiUvhX9vQrFTw3TFQqfiHkrlD+H/a0KE97DUiEVUiEVUiEVUiEVUiEVUiEVUiEVUiEVUiEVUiEVUiEVUiEVUiEVUiEVUiEVUiEVUiEVUiEVUiEVUiEVYoXN4KuHOPi9xUxrOuS9qz+a6BjBfwpvpiMlpd7tEUIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGE/JP8AdTJUuNqJsicAAAAAElFTkSuQmCC",
        },
        {
          image: "data:image/png;base64,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",
          name: "Olivia",
          designation: "UI Designer",
          content: "Love the views from my balcony and the everyday coffee with my flatmate",
          quoteIcon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAYFBMVEX///8AyPoAxvp73vyR4/0y0PuA3/yH4fx23fzH8f0AxPoAyfq57f36///2/f9V1fvs+//R8/6o6f3c9v7D7/0YzPrQ8/5o2fyh5/1U1Pvm+f+N4vy87v3Z9v6X5P0szvqrkbBlAAAFEElEQVR4nO2cDXLiMAyFE1MoJPykUKDQUu5/yw2002Fb4idLlme6+74DaPQcW5ZkO1VFCCGEEEIIIYQQQgghhBBCCCGE/M9s/EwvF362xT6sx82zk+3Zvpk4mRazmdShrtvOwXT3cm7qOrw5mJbzvAq9vt6NVXbTp2l7Ne0zekLm4w8fLhLf85o+fQ7dhXFe03Lm2y8fepqnjKZ3h+bGdHjMaFrO8/hWX892mcv006r523TwCmQRNqtv+no39nlMH/c/TNfb0ktxMfnpRC/xJYfp13DHtkMgi/K2vSew9+PkZzpzIIuynN534jKZjPlHt2+GTIddHu8FzAZG+eqGbSnO22HTGQMZ4HFwlK8S13rLi+EPeDVdZil2h8goX1Hn4KczMJ0lkCF2kRn6yVlpeo0M9xIdK5hP5lBf78ZUZXokMF2fvQupd4kXdZinW17Cyf9hOlNOMcSjyIu+FDimWu6+J4CDEg2BDCOaR1dSS4EOr+4vkkdPzvA2/4MmrRQ4tmLLddg6yauqu4noXR/CYZ4UEI5bub7zu9s3fJUulLBPzE07scBmnDZ0Sayj2caNE/vULWuB9vmvsdt6tmtmMi/CIb22kG0TdWhdo6gsFIStYiMULu8w8k27xxInmqnCCUmSdBk758rpTlPhJ62mk7IRZjLOyZokyoSDZhYtZWHUdQX2bCSjrGu8i5KI1t4ZAQgWobJwe5ZUKmP3JpugnlA2M5eCCB0O7gdPR8E4z3SmBZl8OORVc4+Vm0BBHA1j/6NDnMyoj74EY3cu0F07Q4HaUC4IMyUO1WDKodwmeg5QYJEWMPqE+kiwg5+wKdE7hJ9QP4/gKvRuOn0AP6H6VG8DM8Eix2kz4IayM3oB5mualmQ6aCa16mC+RF+wLnJGcfQb5jX8hEWOfB+AG4ZhRltFeM0nY5gFiDNBf/UCzQ7D/E8B7ViGT4jqlSLHaDD1bwwnXajkLHTaC6o3wyfs0Cd8yKciwi6+GTaGpBFF0jKBFB2lWW6agX22TL5WVfE2mCkWgE+Y9X7cMKACt5RuKEhrLwIkAtaKJakCe0WhOAPWiikvBglNcDzlvWEButGGSYqaiIVuy4JGt6XJdwKTtEhKipahKZKCFW5Id5OIV6iWjA0Vv22h1xXxzLG1mAaBptBNWRANLEkHuJhQqKyoTvFrkJbruuAgxJLvpgACjfKk4sobCDTZNMSJp92m3B9kNKXejsQzGlOBGi+s9acEicSjgelQLx5Kfe8e3hAPNPpGcAWrMssSTwCEUlNeBQJNoacx8XhnmknHeHOkTBsRbhaWzBEcKpcKpWCzsGSl4MCuUIum2ke90L+oqOD0MAWxBEDebSnC44chpYpDENFNFwjitwBL5d1VVKAtpXHs/yTQOSqML4BSBT5o0pjeA4CUxv9h05Un0Gd4HGKCby7EB6+eDtrO+oQUXfUKQzQ4FAKFw7azdsIl9z7vuwfb1Uut6bzZjqNCdHRYSCG8KaFXKLmuWkDhi59C0PAupVD2kPI3K5S+4lIoxFcSiyiUvhX9vQrFTw3TFQqfiHkrlD+H/a0KE97DUiEVUiEVUiEVUiEVUiEVUiEVUiEVUiEVUiEVUiEVUiEVUiEVUiEVUiEVUiEVUiEVUiEVUiEVUiEVUiEVYoXN4KuHOPi9xUxrOuS9qz+a6BjBfwpvpiMlpd7tEUIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGE/JP8AdTJUuNqJsicAAAAAElFTkSuQmCC",
        },
        {
          image: "data:image/png;base64,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",
          name: "Clara",
          designation: "Accountant",
          content: "Was one of the early tenants, I like the focus on flatmate matching and service quality is definitely improving",
          quoteIcon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAYFBMVEX///8AyPoAxvp73vyR4/0y0PuA3/yH4fx23fzH8f0AxPoAyfq57f36///2/f9V1fvs+//R8/6o6f3c9v7D7/0YzPrQ8/5o2fyh5/1U1Pvm+f+N4vy87v3Z9v6X5P0szvqrkbBlAAAFEElEQVR4nO2cDXLiMAyFE1MoJPykUKDQUu5/yw2002Fb4idLlme6+74DaPQcW5ZkO1VFCCGEEEIIIYQQQgghhBBCCCGE/M9s/EwvF362xT6sx82zk+3Zvpk4mRazmdShrtvOwXT3cm7qOrw5mJbzvAq9vt6NVXbTp2l7Ne0zekLm4w8fLhLf85o+fQ7dhXFe03Lm2y8fepqnjKZ3h+bGdHjMaFrO8/hWX892mcv006r523TwCmQRNqtv+no39nlMH/c/TNfb0ktxMfnpRC/xJYfp13DHtkMgi/K2vSew9+PkZzpzIIuynN534jKZjPlHt2+GTIddHu8FzAZG+eqGbSnO22HTGQMZ4HFwlK8S13rLi+EPeDVdZil2h8goX1Hn4KczMJ0lkCF2kRn6yVlpeo0M9xIdK5hP5lBf78ZUZXokMF2fvQupd4kXdZinW17Cyf9hOlNOMcSjyIu+FDimWu6+J4CDEg2BDCOaR1dSS4EOr+4vkkdPzvA2/4MmrRQ4tmLLddg6yauqu4noXR/CYZ4UEI5bub7zu9s3fJUulLBPzE07scBmnDZ0Sayj2caNE/vULWuB9vmvsdt6tmtmMi/CIb22kG0TdWhdo6gsFIStYiMULu8w8k27xxInmqnCCUmSdBk758rpTlPhJ62mk7IRZjLOyZokyoSDZhYtZWHUdQX2bCSjrGu8i5KI1t4ZAQgWobJwe5ZUKmP3JpugnlA2M5eCCB0O7gdPR8E4z3SmBZl8OORVc4+Vm0BBHA1j/6NDnMyoj74EY3cu0F07Q4HaUC4IMyUO1WDKodwmeg5QYJEWMPqE+kiwg5+wKdE7hJ9QP4/gKvRuOn0AP6H6VG8DM8Eix2kz4IayM3oB5mualmQ6aCa16mC+RF+wLnJGcfQb5jX8hEWOfB+AG4ZhRltFeM0nY5gFiDNBf/UCzQ7D/E8B7ViGT4jqlSLHaDD1bwwnXajkLHTaC6o3wyfs0Cd8yKciwi6+GTaGpBFF0jKBFB2lWW6agX22TL5WVfE2mCkWgE+Y9X7cMKACt5RuKEhrLwIkAtaKJakCe0WhOAPWiikvBglNcDzlvWEButGGSYqaiIVuy4JGt6XJdwKTtEhKipahKZKCFW5Id5OIV6iWjA0Vv22h1xXxzLG1mAaBptBNWRANLEkHuJhQqKyoTvFrkJbruuAgxJLvpgACjfKk4sobCDTZNMSJp92m3B9kNKXejsQzGlOBGi+s9acEicSjgelQLx5Kfe8e3hAPNPpGcAWrMssSTwCEUlNeBQJNoacx8XhnmknHeHOkTBsRbhaWzBEcKpcKpWCzsGSl4MCuUIum2ke90L+oqOD0MAWxBEDebSnC44chpYpDENFNFwjitwBL5d1VVKAtpXHs/yTQOSqML4BSBT5o0pjeA4CUxv9h05Un0Gd4HGKCby7EB6+eDtrO+oQUXfUKQzQ4FAKFw7azdsIl9z7vuwfb1Uut6bzZjqNCdHRYSCG8KaFXKLmuWkDhi59C0PAupVD2kPI3K5S+4lIoxFcSiyiUvhX9vQrFTw3TFQqfiHkrlD+H/a0KE97DUiEVUiEVUiEVUiEVUiEVUiEVUiEVUiEVUiEVUiEVUiEVUiEVUiEVUiEVUiEVUiEVUiEVUiEVUiEVUiEVYoXN4KuHOPi9xUxrOuS9qz+a6BjBfwpvpiMlpd7tEUIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGE/JP8AdTJUuNqJsicAAAAAElFTkSuQmCC",
        },
      ]
    }
  }
  render() {
    return (
      <div>
        <CommunityList sectionData={this.state.communitySection} />
        <FeatureList sectionData={this.state.featuresSection} />
        <WhyList sectionData={this.state.whySection} />
        <TestimonialList sectionData={this.state.testimonialSection} />
      </div>
    );
  }
}

export default App;
