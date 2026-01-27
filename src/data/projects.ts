/**
 * Project Data - System Pavers Projects
 *
 * This file contains all project data from System Pavers work.
 * Internal data is kept separate from public-facing data.
 * Projects are numbered sequentially by sold date.
 */

import {
  InternalProject,
  PublicProject,
  parseQualityScore,
} from '@/types/project';

/**
 * Internal project records - NOT for public display
 * Contains all business data, financials, and client info
 * Ordered by sold date (earliest first)
 */
export const internalProjects: InternalProject[] = [
  // Job #1 - Sold 10/14/2024
  {
    jobNumber: 1,
    client: {
      name: 'Sam Luu',
      address: '111 Poppy Ct',
      city: 'Fremont',
      state: 'CA',
      zip: '94538',
      phone: '(646) 457-6177',
      email: 'samluu32@gmail.com',
      homeownerType: 'Male - Joint H/O',
    },
    scope: ['Pavers', 'Rock Prep', 'Soil Removal', 'Turf'],
    status: 'completed',
    leadSource: 'SP Marketing',
    chanceOfClosing: '80 - 100 %',
    estimatedHoursToClose: 0,
    inputHoursTally: 18,
    priceToExpectedRatio: 2,
    priceToMarketRatio: 1.25,
    financials: {
      estimatedPrice: '10 - 20 k',
      fifteenPercentPrice: 23419,
      closingPrice: 17200,
      grossRevenue: 19058,
      commissionPercent: 4,
      netCommission: 733.59,
    },
    timeline: {
      initialAppointment: '10/8/2024',
      soldDate: '10/14/2024',
      previewDate: '10/28/2024',
      breakGroundDate: '10/31/2024',
      installComplete: '2/12/2025',
      finalPayment: '2/13/2025',
    },
    team: {
      projectManager: 'Octavio (Jesus Viniegra)',
    },
    quality: {
      pmScore: parseQualityScore('2/4 (manageable)'),
      crewScore: parseQualityScore('1/4 (poor quality)'),
      clientScore: parseQualityScore('2/4 (manageable)'),
    },
    jobNotes: 'Difficult Job',
  },
  // Job #2 - Sold 10/23/2024
  {
    jobNumber: 2,
    client: {
      name: 'Marc Higaki',
      address: '40 Marie Ct',
      city: 'Half Moon Bay',
      state: 'CA',
      zip: '94019',
      phone: '(650) 996-2923',
      email: 'higaki.marc@gmail.com',
      homeownerType: 'Male - Joint H/O',
    },
    scope: ['Pavers', 'Lighting', 'Shrub Removal', 'Walls', 'Bullnose', 'RV/Boat/Hottub Parking'],
    status: 'completed',
    leadSource: 'SP Marketing',
    chanceOfClosing: '80 - 100 %',
    estimatedHoursToClose: 0,
    inputHoursTally: 35,
    priceToExpectedRatio: 2.25,
    financials: {
      estimatedPrice: '80 - 160 k',
      fifteenPercentPrice: 106023,
      closingPrice: 87661,
      grossRevenue: 89113,
      commissionPercent: 4,
      netCommission: 5240.16,
    },
    timeline: {
      initialAppointment: '10/14/2024',
      soldDate: '10/23/2024',
      previewDate: '11/12/2024',
      breakGroundDate: '11/18/2024',
      installComplete: '2/5/2025',
      finalPayment: '3/11/2025',
    },
    team: {
      projectManager: 'Cesar Guzman',
    },
    quality: {
      pmScore: parseQualityScore('1/4 (poor quality)'),
      crewScore: parseQualityScore('2/4 (manageable)'),
      clientScore: parseQualityScore('3/4 (acceptable)'),
    },
  },
  // Job #3 - Sold 11/16/2024
  {
    jobNumber: 3,
    client: {
      name: 'Andi Heintz',
      address: '1014 Orange Ave',
      city: 'San Carlos',
      state: 'CA',
      zip: '94070',
      phone: '(650) 888-1400',
      email: 'cosmotigs@yahoo.com',
      homeownerType: 'Female - Joint H/O',
    },
    scope: ['Pavers', 'Bullnose'],
    status: 'completed',
    leadSource: 'SP Marketing',
    chanceOfClosing: '80 - 100 %',
    estimatedHoursToClose: 0,
    inputHoursTally: 10,
    priceToExpectedRatio: 1.5,
    priceToMarketRatio: 1,
    financials: {
      estimatedPrice: '5 - 10 k',
      fifteenPercentPrice: 8095,
      closingPrice: 7658,
      grossRevenue: 7658,
      commissionPercent: 8,
      netCommission: 1094.88,
    },
    timeline: {
      initialAppointment: '10/18/2024',
      soldDate: '11/16/2024',
      previewDate: '12/5/2024',
      breakGroundDate: '12/12/2024',
      installComplete: '12/23/2024',
      finalPayment: '12/26/2024',
    },
    team: {
      projectManager: 'Octavio (Jesus Viniegra)',
    },
    quality: {
      pmScore: parseQualityScore('3/4 (acceptable)'),
      crewScore: parseQualityScore('2/4 (manageable)'),
      clientScore: parseQualityScore('3/4 (acceptable)'),
    },
  },
  // Job #4 - Sold 11/27/2024
  {
    jobNumber: 4,
    client: {
      name: 'Ignite Shanbaky',
      address: '1725 Lake St',
      city: 'San Mateo',
      state: 'CA',
      zip: '94403',
      phone: '(408) 318-7684',
      email: 'ignitep0815@yahoo.com',
      homeownerType: 'Female - Sole H/O',
    },
    scope: ['Pavers', 'Turf', 'Walls', 'Bullnose', 'Drainage', 'Lighting'],
    status: 'testimonial',
    leadSource: 'SP Marketing',
    chanceOfClosing: '80 - 100 %',
    estimatedHoursToClose: 0,
    inputHoursTally: 35,
    priceToExpectedRatio: 2.75,
    priceToMarketRatio: 1.25,
    financials: {
      estimatedPrice: '80 - 160 k',
      fifteenPercentPrice: 169517,
      closingPrice: 120763,
      grossRevenue: 124946,
      commissionPercent: 4,
      netCommission: 5231.38,
    },
    timeline: {
      initialAppointment: '10/4/2024',
      soldDate: '11/27/2024',
      previewDate: '1/29/2025',
      breakGroundDate: '2/3/2025',
      installComplete: '2/28/2025',
      finalPayment: '3/5/2025',
    },
    team: {
      projectManager: 'Octavio (Jesus Viniegra)',
      crewLead: 'Kevin',
    },
    quality: {
      pmScore: parseQualityScore('4/4 (flawless)'),
      crewScore: parseQualityScore('3/4 (acceptable)'),
      clientScore: parseQualityScore('3/4 (acceptable)'),
    },
    pmNotes: 'Very kind single mother, big investment for her.',
  },
  // Job #5 - Sold 12/3/2024
  {
    jobNumber: 5,
    client: {
      name: 'Theresa Abrahamson',
      address: '1421 Jenevein Ave',
      city: 'San Bruno',
      state: 'CA',
      zip: '94066',
      phone: '(650) 438-5870',
      email: 'tabra@pacbell.net',
      homeownerType: 'Female - Sole H/O',
    },
    scope: ['Pavers', 'Bullnose', 'Drainage'],
    status: 'completed',
    leadSource: 'SP Marketing',
    chanceOfClosing: '80 - 100 %',
    estimatedHoursToClose: 0,
    inputHoursTally: 10,
    priceToExpectedRatio: 2.25,
    financials: {
      estimatedPrice: '5 - 10 k',
      fifteenPercentPrice: 10273,
      closingPrice: 7500,
      grossRevenue: 7500,
      commissionPercent: 5,
      netCommission: 143.5,
    },
    timeline: {
      initialAppointment: '11/21/2024',
      soldDate: '12/3/2024',
      previewDate: '12/19/2024',
      breakGroundDate: '1/2/2025',
      installComplete: '1/8/2025',
      finalPayment: '1/22/2025',
    },
    team: {
      projectManager: 'Octavio (Jesus Viniegra)',
    },
    quality: {
      pmScore: parseQualityScore('3/4 (acceptable)'),
      crewScore: parseQualityScore('3/4 (acceptable)'),
      clientScore: parseQualityScore('4/4 (flawless)'),
    },
  },
  // Job #6 - Sold 12/31/2024
  {
    jobNumber: 6,
    client: {
      name: 'Kavya Prajapati',
      address: '40284 Cottage Rose Ter',
      city: 'Fremont',
      state: 'CA',
      zip: '94538',
      phone: '(562) 450-4189',
      email: 'kavyaprajapati33@gmail.com',
      homeownerType: 'Female - Joint H/O',
    },
    scope: ['Pavers'],
    status: 'completed',
    leadSource: 'SP Marketing',
    chanceOfClosing: '80 - 100 %',
    estimatedHoursToClose: 0,
    inputHoursTally: 8,
    priceToExpectedRatio: 2,
    financials: {
      estimatedPrice: '5 - 10 k',
      fifteenPercentPrice: 11829,
      closingPrice: 8560,
      grossRevenue: 9372,
      commissionPercent: 4,
      netCommission: 368.47,
    },
    timeline: {
      initialAppointment: '12/19/2024',
      soldDate: '12/31/2024',
      previewDate: '1/23/2025',
      breakGroundDate: '1/28/2025',
      installComplete: '1/30/2025',
      finalPayment: '2/3/2025',
    },
    team: {
      projectManager: 'Octavio (Jesus Viniegra)',
    },
    quality: {
      pmScore: parseQualityScore('4/4 (flawless)'),
      crewScore: parseQualityScore('4/4 (flawless)'),
      clientScore: parseQualityScore('3/4 (acceptable)'),
    },
  },
  // Job #7 - Sold 1/11/2025
  {
    jobNumber: 7,
    client: {
      name: 'Sharon Hudak',
      address: '3531 Greer Rd',
      city: 'Palo Alto',
      state: 'CA',
      zip: '94303',
      phone: '(650) 494-2722',
      email: 'srh813@gmail.com',
      homeownerType: 'Female - Sole H/O',
    },
    scope: ['Pavers'],
    status: 'completed',
    leadSource: 'SP Marketing',
    chanceOfClosing: '80 - 100 %',
    estimatedHoursToClose: 0,
    inputHoursTally: 5,
    priceToExpectedRatio: 1.5,
    financials: {
      estimatedPrice: '10 - 20 k',
      fifteenPercentPrice: 18015,
      closingPrice: 15000,
      grossRevenue: 15000,
      commissionPercent: 8,
      netCommission: 1398.58,
    },
    timeline: {
      initialAppointment: '1/11/2025',
      soldDate: '1/11/2025',
      previewDate: '2/3/2025',
      breakGroundDate: '2/5/2025',
      installComplete: '2/10/2025',
      finalPayment: '2/18/2025',
    },
    team: {
      projectManager: 'Cesar Guzman',
    },
    quality: {
      pmScore: parseQualityScore('4/4 (flawless)'),
      crewScore: parseQualityScore('4/4 (flawless)'),
      clientScore: parseQualityScore('4/4 (flawless)'),
    },
  },
  // Job #8 - Sold 1/24/2025
  {
    jobNumber: 8,
    client: {
      name: 'Ajit Singh',
      address: '1839 Beach Park Blvd',
      city: 'Foster City',
      state: 'CA',
      zip: '94404',
      phone: '(408) 478-5261',
      email: 'singh.ajitpal1@gmail.com',
      homeownerType: 'Male - Joint H/O',
    },
    scope: ['Pavers', 'Curbing', 'Drainage', 'Lighting'],
    status: 'completed',
    leadSource: 'SP Marketing',
    chanceOfClosing: '80 - 100 %',
    estimatedHoursToClose: 0,
    inputHoursTally: 20,
    priceToExpectedRatio: 2,
    financials: {
      estimatedPrice: '80 - 160 k',
      fifteenPercentPrice: 104180,
      closingPrice: 79000,
      grossRevenue: 87384,
      commissionPercent: 4,
      netCommission: 2539.41,
    },
    timeline: {
      initialAppointment: '12/26/2024',
      soldDate: '1/24/2025',
      previewDate: '2/18/2025',
      breakGroundDate: '2/24/2025',
      installComplete: '4/9/2025',
    },
    team: {
      projectManager: 'Octavio (Jesus Viniegra)',
      crewLead: 'Kevin',
    },
    quality: {
      pmScore: parseQualityScore('4/4 (flawless)'),
      crewScore: parseQualityScore('4/4 (flawless)'),
      clientScore: parseQualityScore('2/4 (manageable)'),
    },
    jobNotes: 'Punch List',
  },
  // Job #9 - Sold 2/19/2025
  {
    jobNumber: 9,
    client: {
      name: 'Sarthak Dubey',
      address: '3600 La Mesa Dr',
      city: 'Hayward',
      state: 'CA',
      zip: '94542',
      phone: '(224) 522-1156',
      email: 'sarthak.dubey123@gmail.com',
      homeownerType: 'Male - Joint H/O',
    },
    scope: ['Pavers', 'Rock Prep', 'Footings (Pergola or Fence)'],
    status: 'completed',
    leadSource: 'SP Marketing',
    chanceOfClosing: '80 - 100 %',
    estimatedHoursToClose: 0,
    inputHoursTally: 11,
    priceToExpectedRatio: 1,
    financials: {
      estimatedPrice: '20 - 40 k',
      fifteenPercentPrice: 34214,
      closingPrice: 30877,
      grossRevenue: 30877,
      commissionPercent: 10,
      netCommission: 3090.64,
    },
    timeline: {
      initialAppointment: '2/18/2025',
      soldDate: '2/19/2025',
      previewDate: '2/26/2025',
      breakGroundDate: '3/4/2025',
      installComplete: '3/14/2025',
      finalPayment: '3/20/2025',
    },
    team: {
      projectManager: 'Octavio (Jesus Viniegra)',
    },
  },
  // Job #10 - Sold 3/24/2025
  {
    jobNumber: 10,
    client: {
      name: 'Steven High',
      address: '637 Greenwich Ln',
      city: 'Foster City',
      state: 'CA',
      zip: '94404',
      phone: '(650) 759-6903',
      email: 'shigh1956@gmail.com',
      homeownerType: 'Male - Joint H/O',
      additionalContacts: 'Mimi - wife',
    },
    scope: ['Pavers', 'Drainage'],
    status: 'scheduled',
    leadSource: 'SP Marketing',
    chanceOfClosing: '80 - 100 %',
    estimatedHoursToClose: 6,
    inputHoursTally: 6,
    priceToExpectedRatio: 1.5,
    priceToMarketRatio: 1.5,
    financials: {
      estimatedPrice: '10 - 20 k',
      fifteenPercentPrice: 25640,
      closingPrice: 19290,
      commissionPercent: 2,
      netCommission: 665,
    },
    timeline: {
      initialAppointment: '3/20/2025',
      soldDate: '3/24/2025',
      materialsConfirmDate: '4/4/2025',
      previewDate: '4/7/2025',
    },
    team: {
      projectManager: 'Octavio (Jesus Viniegra)',
      crewLead: 'Enrique',
    },
  },
  // Job #11 - Sold 3/25/2025
  {
    jobNumber: 11,
    client: {
      name: 'Ritu Rathore',
      address: '948 Wood Duck Ave',
      city: 'Santa Clara',
      state: 'CA',
      zip: '95051',
      phone: '(408) 242-8617',
      email: 'rituraja@gmail.com',
      homeownerType: 'Female - Joint H/O',
      additionalContacts: 'Raja - husband',
    },
    scope: ['Pavers'],
    status: 'deposit-paid',
    leadSource: 'SP Marketing',
    chanceOfClosing: '80 - 100 %',
    estimatedHoursToClose: 6,
    inputHoursTally: 11,
    priceToExpectedRatio: 1.5,
    priceToMarketRatio: 1.25,
    financials: {
      estimatedPrice: '20 - 40 k',
      fifteenPercentPrice: 29170,
      closingPrice: 18900,
      commissionPercent: 4,
      netCommission: 798.5,
    },
    timeline: {
      initialAppointment: '2/5/2025',
      soldDate: '3/25/2025',
      materialsConfirmDate: '4/5/2025',
    },
    team: {
      projectManager: 'Cesar Guzman',
    },
  },
  // Job #12 - Sold 4/8/2025
  {
    jobNumber: 12,
    client: {
      name: 'Jennifer Milstein',
      address: '912 Bluebonnet Dr.',
      city: 'Sunnyvale',
      state: 'CA',
      zip: '94086',
      phone: '(408) 605-4296',
      email: 'milsteinjennifer@yahoo.com',
      homeownerType: 'Female - Sole H/O',
      additionalContacts: 'home phone - (408) 732-4213',
    },
    scope: ['Pavers', 'Turf'],
    status: 'deposit-paid',
    leadSource: 'SP Marketing',
    chanceOfClosing: '80 - 100 %',
    estimatedHoursToClose: 2,
    inputHoursTally: 6,
    priceToExpectedRatio: 1.5,
    financials: {
      estimatedPrice: '10 - 20 k',
      fifteenPercentPrice: 14621,
      closingPrice: 10790,
      commissionPercent: 1,
      netCommission: 102.65,
    },
    timeline: {
      initialAppointment: '4/8/2025',
      soldDate: '4/8/2025',
      materialsConfirmDate: '4/8/2025',
    },
    leadNotes: 'Backyard remodel Approx 240 sq ft. Has specific vision on pavers and turf, she has existing pavers that she wants to add to. Wants to replace grass with artificial turf.',
  },
];

/**
 * Public projects for website display
 * All projects with sanitized data, ordered by job number
 */
export const publicProjects: PublicProject[] = [
  // Job #4 - San Mateo (Dock Entrance)
  {
    slug: 'lake-street-dock-entrance',
    title: 'Lake Street Dock Entrance',
    location: 'San Mateo, CA',
    completionDate: 'February 2025',
    status: 'completed',
    projectType: 'partial',
    description: '',
    content: `This project involved rebuilding a difficult and uneven path leading down to a dock. The original concrete walkway had not been poured straight and required full demolition before any new work could begin.

We removed the existing walkway, pulled back surrounding soil, and removed failing garden boxes installed by a previous contractor. New steps were built using concrete footings, topped with Belgard Catalina Grana Scandina Gray pavers and bullnose coping for each tread.

The main walkway was installed in a three-piece random pattern with Dimensions Midnight accent borders in a soldier course. Three 24×24 Dimensions slabs were used as stepping stones leading toward the back steps.

An AB Classic retaining wall in gray replaced the deteriorating garden blocks, holding back soil along the pathway. Integrated step lighting was added for nighttime visibility.

In the backyard, turf replaced grass that had been difficult to maintain, creating a durable, low-water play area for kids and pets. Old stumps and garden boxes were removed to fully level the space and significantly increase its usability.`,
    scope: ['Pavers', 'Dock access pathway'],
    highlights: ['Enhanced waterfront access', 'Durable paver installation'],
    featuredImage: '/imgs/system-pavers-projects/4-ignite-shanbaky/ignite-dockview-after.png',
    beforeImage: '/imgs/system-pavers-projects/4-ignite-shanbaky/ignite-dockentrance-before.jpg',
    afterImage: '/imgs/system-pavers-projects/4-ignite-shanbaky/ignite-dockview-after.png',
    imageAspectRatio: 1.5,
    flipAfterImage: true,
    afterImagePosition: 'right 30% top 30%',
  },
  // Job #8 - Foster City (Back Yard)
  {
    slug: 'foster-city-back-yard',
    title: 'Foster City Backyard',
    location: 'Foster City, CA',
    completionDate: 'April 2025',
    status: 'completed',
    projectType: 'partial',
    description: '',
    content: `The backyard originally consisted of mismatched steps, failing retaining walls, poor drainage, and unusable seating areas.

We began by removing all existing hardscape, recycling brick from the old fireplace where possible. New steps were built using Positano pavers and coping, designed as double steps to make access easier for elderly family members.

The entire area was regraded to direct water away from the center, preventing debris buildup. An Angelina edger was installed along the back to hold soil in place, and integrated step lighting was added for nighttime visibility.

The result is a cohesive, functional backyard with improved drainage and far more usable space.`,
    scope: ['Patio pavers', 'Landscape lighting'],
    highlights: ['Waterfront backyard', 'Entertainment space'],
    featuredImage: '/imgs/system-pavers-projects/9-ajit-singh/ajit-backyard-after.png',
    beforeImage: '/imgs/system-pavers-projects/9-ajit-singh/ajit-backyard-before.JPG',
    afterImage: '/imgs/system-pavers-projects/9-ajit-singh/ajit-backyard-after.png',
    imageAspectRatio: 1.5, // 1536 / 1024 - using wider estimate
  },
  // Job #2 - Half Moon Bay
  {
    slug: 'half-moon-bay-estate',
    title: 'Half Moon Bay Estate',
    location: 'Half Moon Bay, CA',
    completionDate: 'February 2025',
    status: 'completed',
    projectType: 'partial',
    description: '',
    content: `For this project, the primary focus was long-term stability and drainage. Located near the coast, the property sits on loose, sandy soil that had caused the existing driveway to crack and sink over time.

To address this, we excavated deeper than typical and installed a significantly thicker layer of compacted base rock to ensure the new driveway would remain stable for years to come. A continuous concrete bond beam was poured along the edges of the driveway and walkways to prevent shifting.

Because the property experiences heavy seasonal rainfall, the team also constructed a large underground drain pit—approximately six feet deep and three feet wide—filled with drain rock. All roof downspouts were routed into this system to safely manage runoff.

In the backyard, we installed a retaining wall to hold back sloping soil from the rear fence line, allowing the majority of the yard to remain flat and usable. Integrated lighting was added throughout the project, including in-paver path lights, post lights, and lighting beneath the retaining wall cap.

We also rebuilt the front entry, replacing a cracked poured-in-place concrete step with a new entry that matched the driveway using Belgard Durafusion Catalina Grana pavers in gray, charcoal, and tan tones.

The entire project was completed over the course of approximately one month.`,
    scope: ['Full property pavers', 'Retaining walls', 'Landscape lighting', 'RV/Boat parking pad', 'Bullnose steps'],
    highlights: ['Large-scale installation', 'Custom RV parking solution', 'Integrated lighting'],
    featuredImage: '/imgs/system-pavers-projects/2-marc-higaki/marc-driveway-finished.JPG',
    beforeImage: '/imgs/system-pavers-projects/2-marc-higaki/marc-driveway-before.JPG',
    afterImage: '/imgs/system-pavers-projects/2-marc-higaki/marc-driveway-finished.JPG',
    imageAspectRatio: 1.333, // 5712 / 4284 (4:3)
  },
  // Job #3 - San Carlos
  {
    slug: 'san-carlos-entry',
    title: 'San Carlos Entry Upgrade',
    location: 'San Carlos, CA',
    completionDate: 'December 2024',
    status: 'completed',
    projectType: 'partial',
    description: '',
    content: `This project centered around safety, durability, and clean visual alignment. The existing concrete front slab had become polished and extremely slippery, especially when wet, creating a serious hazard.

We replaced the slab with Belgard Positano Premier Smooth pavers in a random pattern, carefully aligned with the house and driveway to minimize cuts and avoid thin slivers that can look visually distracting over time. A soldier-course border was installed along the front step edge, capped with a Belgard Brisa wall cap.

To ensure proper elevation and prevent future issues with door clearance and siding rot, the old concrete stoop was fully removed and rebuilt from the ground up. This included new compacted base rock, bedding sand, and a reinforced concrete edge before installing the pavers.

The final result provides a safer walking surface while blending seamlessly with the home's existing materials and layout.`,
    scope: ['Pavers', 'Bullnose steps'],
    highlights: ['Quick installation', 'Enhanced curb appeal'],
    featuredImage: '/imgs/system-pavers-projects/3-andi-heintz/andi-porch-after.jpg',
    beforeImage: '/imgs/system-pavers-projects/3-andi-heintz/andi-porch-before.jpg',
    afterImage: '/imgs/system-pavers-projects/3-andi-heintz/andi-porch-after.jpg',
    imageAspectRatio: 1.333, // 4032 / 3024 (4:3)
    beforeImagePosition: 'center 85%', // Shift focal point further down
  },
  // Job #4 - San Mateo (Driveway)
  {
    slug: 'lake-street-driveway',
    title: 'Lake Street Driveway',
    location: 'San Mateo, CA',
    completionDate: 'February 2025',
    status: 'completed',
    projectType: 'partial',
    description: '',
    scope: ['Driveway pavers'],
    highlights: ['Complete driveway renovation', 'Clean modern aesthetic'],
    featuredImage: '/imgs/system-pavers-projects/4-ignite-shanbaky/ignite-driveway-after.png',
    beforeImage: '/imgs/system-pavers-projects/4-ignite-shanbaky/ignite-driveway-before.png',
    afterImage: '/imgs/system-pavers-projects/4-ignite-shanbaky/ignite-driveway-after.png',
    imageAspectRatio: 1.5,
  },
  // Job #4 - San Mateo (Back Stoop)
  {
    slug: 'lake-street-back-stoop',
    title: 'Lake Street Back Stoop',
    location: 'San Mateo, CA',
    completionDate: 'February 2025',
    status: 'completed',
    projectType: 'partial',
    description: '',
    content: `This project replaced an old, unsightly brick stoop that had been mortared together without any real integration into the home's design.

We installed a new circular back stoop using Belgard Catalina Grana Scandina Gray pavers in a three-piece random pattern, finished with Marina coping. Each coping piece was carefully trimmed to form a precise radius, laid out using a string-line centered on the door.

The new stoop ties seamlessly into the surrounding patio and provides a functional seating area where the homeowner can comfortably sit outside and enjoy the backyard.`,
    scope: ['Pavers', 'Backyard access'],
    highlights: ['Improved rear entry', 'Integrated design'],
    featuredImage: '/imgs/system-pavers-projects/4-ignite-shanbaky/ignite-backstoop-after.png',
    beforeImage: '/imgs/system-pavers-projects/4-ignite-shanbaky/ignite-backstoop-before.jpg',
    afterImage: '/imgs/system-pavers-projects/4-ignite-shanbaky/ignite-backstoop-after.png',
    imageAspectRatio: 1.5,
    hasTestimonial: true,
    testimonialQuote: '',
  },
  // Job #5 - San Bruno
  {
    slug: 'san-bruno-stairs',
    title: 'San Bruno Side Steps',
    location: 'San Bruno, CA',
    completionDate: 'January 2025',
    status: 'completed',
    projectType: 'partial',
    description: '',
    content: `This project addressed both drainage and day-to-day usability. The side yard was steep, poorly drained, and difficult to navigate—especially when taking trash bins in and out.

We used Basalite Universal Pavers in Mendocino, installed in a 45-degree herringbone pattern to match the home's existing hardscape. A large flat landing was incorporated near the entry to provide a stable area for bins.

The steps were sloped slightly away from the house and built over compacted base rock to allow water to drain underneath. A 3-inch PVC drainage pipe was installed beneath the stairs, connecting roof downspouts and carrying water safely into the front yard.

Bullnose step edges in cream-tan tones were paired with a Dimensions Sepia accent border, fully set in a concrete bond beam to prevent long-term movement.`,
    scope: ['Pavers', 'Bullnose steps', 'Drainage'],
    highlights: ['Improved drainage', 'Clean modern design'],
    featuredImage: '/imgs/system-pavers-projects/5-theresa-abrahamson/theresa-stairs-after.png',
    beforeImage: '/imgs/system-pavers-projects/5-theresa-abrahamson/theresa-stairs-before.jpg',
    afterImage: '/imgs/system-pavers-projects/5-theresa-abrahamson/theresa-stairs-after.png',
    imageAspectRatio: 0.75, // 3024 / 4032 (3:4 portrait)
    flipAfterImage: true, // Flip horizontally to show stairs on the right
  },
  // Job #7 - Palo Alto
  {
    slug: 'palo-alto-refresh',
    title: 'Palo Alto Paver Refresh',
    location: 'Palo Alto, CA',
    completionDate: 'February 2025',
    status: 'completed',
    projectType: 'partial',
    description: '',
    content: `This was a straightforward project focused on safety and comfort. The homeowner's existing exposed-aggregate patio had shifted and deteriorated over time, creating uneven surfaces that caused chairs to wobble and posed a tripping risk.

We replaced the area with Belgard Durafusion Scandina Gray pavers, chosen for their flat profile and tight joints. After excavating approximately eight inches, we installed compacted base rock, bedding sand, and polymeric joint sand to lock everything in place.

While simple in scope, the emphasis was on proper preparation and execution to ensure the patio remains flat and stable long-term.`,
    scope: ['Paver installation'],
    highlights: ['Same-day consultation to sale', 'Flawless execution'],
    featuredImage: '/imgs/system-pavers-projects/7-sharon-hudak/sharon-patio-finished.JPG',
    beforeImage: '/imgs/system-pavers-projects/7-sharon-hudak/sharon-patio-before.jpg',
    afterImage: '/imgs/system-pavers-projects/7-sharon-hudak/sharon-patio-finished.JPG',
    imageAspectRatio: 1.333, // mixed: before is portrait (0.75), after is landscape (1.333) - using wider
  },
  // Job #8 - Foster City (Front Yard)
  {
    slug: 'foster-city-front-yard',
    title: 'Foster City Front Yard',
    location: 'Foster City, CA',
    completionDate: 'April 2025',
    status: 'completed',
    projectType: 'partial',
    description: '',
    content: `This project involved a full front-yard transformation. We helped the homeowners secure financing and expanded the driveway from approximately 15 feet to the full width of the property.

Concrete bond beams were installed along all edges to prevent movement under vehicle traffic. Downspout drainage was routed underneath the driveway using pop-ups, keeping water off the pavers and reducing staining and moss growth.

The walkway and entry were completely rebuilt using Belgard Positano pavers, replacing the old concrete and creating a cohesive, durable front approach.`,
    scope: ['Driveway pavers', 'Curbing', 'Drainage'],
    highlights: ['Waterfront property', 'Complex drainage solutions'],
    featuredImage: '/imgs/system-pavers-projects/9-ajit-singh/ajit-driveway-after.png',
    beforeImage: '/imgs/system-pavers-projects/9-ajit-singh/ajit-driveway-before.JPG',
    afterImage: '/imgs/system-pavers-projects/9-ajit-singh/ajit-driveway-after.png',
    imageAspectRatio: 1.5, // mixed: before is 1.333, after is 1.5 - using wider
  },
  // Job #10 - Foster City (Greenwich)
  {
    slug: 'foster-city-greenwich',
    title: 'Foster City Driveway',
    location: 'Foster City, CA',
    completionDate: 'April 2025',
    status: 'completed',
    projectType: 'partial',
    description: '',
    content: `This driveway rebuild addressed severe drainage and soil stability issues. The existing concrete pathway was cracked and sloped incorrectly, causing water to pool.

We regraded the area away from the house and installed a deeper-than-standard base due to problematic clay and sand soils. The driveway was paved using Quarry Stone pavers in Sierra Granite with a soldier-course border.

To protect against future damage, approximately 19 feet of root barrier was installed along both sides. The concrete bond beam was reinforced with rebar for added strength, ensuring long-term durability.`,
    scope: ['Pavers', 'Drainage'],
    highlights: ['Drainage solutions', 'Clean finish'],
    featuredImage: '/imgs/system-pavers-projects/10-steven-high/steven-driveway-after.png',
    beforeImage: '/imgs/system-pavers-projects/10-steven-high/steven-driveway-before.png',
    afterImage: '/imgs/system-pavers-projects/10-steven-high/steven-driveway-after.png',
    imageAspectRatio: 1.5, // mixed: before is 1.333, after is 1.5 - using wider
  },
  // Robin Deck - Cal & Fynn Construction
  {
    slug: 'robin-deck',
    title: 'Composite Deck Project',
    location: 'Palo Alto, CA',
    completionDate: 'January 2025',
    status: 'completed',
    projectType: 'partial',
    description: '',
    content: `This project replaced a failing deck that had suffered rot, burn damage, and pest intrusion.

We removed the old structure and installed nine concrete footings supporting pressure-treated Douglas fir posts. A 16-inch-on-center joist system was built and protected with joist tape to extend its lifespan beneath the composite decking.

The deck surface was constructed entirely from TimberTech Mahogany composite boards, with mitered borders and a hidden fastening system for a clean finish.

An 8-foot-tall redwood awning was added, finished with pressed linseed oil and topped with corrugated steel roofing secured using neoprene-washer screws to ensure weather protection without leaks.`,
    scope: ['Deck construction', 'Custom carpentry'],
    highlights: ['Custom deck build', 'Quality craftsmanship'],
    featuredImage: '/imgs/cal-fynn-construction/Robin-deck-after.jpg',
    beforeImage: '/imgs/cal-fynn-construction/Robin-deck-before.png',
    afterImage: '/imgs/cal-fynn-construction/Robin-deck-after.jpg',
    imageAspectRatio: 1.333, // Estimated 4:3 ratio
  },
];

/**
 * Get all public projects (completed first, then in-progress)
 */
export function getAllProjects(): PublicProject[] {
  return [...publicProjects].sort((a, b) => {
    if (a.status === 'completed' && b.status !== 'completed') return -1;
    if (a.status !== 'completed' && b.status === 'completed') return 1;
    return 0;
  });
}

/**
 * Get all completed public projects
 */
export function getCompletedProjects(): PublicProject[] {
  return publicProjects.filter(p => p.status === 'completed');
}

/**
 * Get a single public project by slug
 */
export function getProjectBySlug(slug: string): PublicProject | undefined {
  return publicProjects.find(p => p.slug === slug);
}

/**
 * Get project statistics
 */
export function getProjectStats() {
  const completed = internalProjects.filter(
    p => p.status === 'completed' || p.status === 'testimonial'
  );

  const totalRevenue = completed.reduce(
    (sum, p) => sum + (p.financials.grossRevenue || 0),
    0
  );

  return {
    totalProjects: completed.length,
    totalRevenue,
    averageProjectSize: totalRevenue / completed.length,
    testimonialCount: internalProjects.filter(p => p.status === 'testimonial').length,
  };
}
