/**
 * Project Types for cf.design Landscape Design
 *
 * These types define the structure for landscape projects,
 * separating public-facing data from internal business data.
 */

/** Project scope items */
export type ProjectScopeItem =
  | 'Pavers'
  | 'Turf'
  | 'Walls'
  | 'Bullnose'
  | 'Drainage'
  | 'Lighting'
  | 'Rock Prep'
  | 'Soil Removal'
  | 'Shrub Removal'
  | 'Curbing'
  | 'Footings (Pergola or Fence)'
  | 'RV/Boat/Hottub Parking';

/** Project status in the pipeline */
export type ProjectStatus =
  | 'lead'
  | 'consultation-scheduled'
  | 'quote-sent'
  | 'deposit-paid'
  | 'materials-confirmed'
  | 'scheduled'
  | 'in-progress'
  | 'punch-list'
  | 'completed'
  | 'testimonial';

/** Quality score (1-4 scale) */
export type QualityScore = 1 | 2 | 3 | 4;

export interface QualityScoreDetails {
  score: QualityScore;
  label: 'poor quality' | 'manageable' | 'acceptable' | 'flawless';
}

/** Client information - INTERNAL USE ONLY */
export interface ClientInfo {
  name: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  phone?: string;
  email?: string;
  homeownerType?: 'Male - Joint H/O' | 'Female - Joint H/O' | 'Male - Sole H/O' | 'Female - Sole H/O';
  additionalContacts?: string;
}

/** Financial data - INTERNAL USE ONLY */
export interface ProjectFinancials {
  estimatedPrice: string;
  fifteenPercentPrice?: number;
  closingPrice?: number;
  grossRevenue?: number;
  grossProfit?: number;
  commissionPercent?: number;
  netCommission?: number;
  laborCost?: number;
  materialsCost?: number;
}

/** Timeline dates */
export interface ProjectTimeline {
  leadDate?: string;
  initialAppointment?: string;
  soldDate?: string;
  materialsConfirmDate?: string;
  previewDate?: string;
  breakGroundDate?: string;
  installComplete?: string;
  finalPayment?: string;
}

/** Team members assigned to project */
export interface ProjectTeam {
  projectManager?: string;
  crewLead?: string;
  crewMembers?: string[];
}

/** Quality assessment */
export interface ProjectQuality {
  pmScore?: QualityScoreDetails;
  crewScore?: QualityScoreDetails;
  clientScore?: QualityScoreDetails;
}

/**
 * Internal project data - contains all business details
 * NOT for public display
 */
export interface InternalProject {
  // Identifier - sequential job number starting from 1
  jobNumber: number;

  // Client (private)
  client: ClientInfo;

  // Project details
  scope: ProjectScopeItem[];
  scopeDescription?: string;
  status: ProjectStatus;
  leadSource: string;

  // Sales metrics
  chanceOfClosing?: string;
  estimatedHoursToClose?: number;
  inputHoursTally?: number;
  priceToExpectedRatio?: number;
  priceToMarketRatio?: number;

  // Financials (private)
  financials: ProjectFinancials;

  // Timeline
  timeline: ProjectTimeline;

  // Team
  team?: ProjectTeam;

  // Quality
  quality?: ProjectQuality;

  // Notes (private)
  leadNotes?: string;
  jobNotes?: string;
  parkingInfo?: string;
  pmNotes?: string;
  takeaways?: string;
}

/**
 * Public project data - safe for website display
 * Derived from InternalProject but excludes sensitive info
 */
export interface PublicProject {
  // Display info
  slug: string;
  title: string;
  location: string; // City, State only
  completionDate: string;
  status: 'completed' | 'in-progress';

  // Project type - determines display format
  projectType: 'full-property' | 'partial';

  // Description - detailed narrative about the project
  description?: string;

  // Scope (simplified for display)
  scope: string[];
  highlights: string[];

  // Media
  featuredImage: string;
  images?: string[];
  beforeImage?: string;
  afterImage?: string;
  imageAspectRatio?: number; // width / height for before/after images
  beforeImagePosition?: string; // CSS object-position value for before image
  afterImagePosition?: string; // CSS object-position value for after image
  flipBeforeImage?: boolean; // Flip before image horizontally
  flipAfterImage?: boolean; // Flip after image horizontally

  // Optional testimonial
  hasTestimonial?: boolean;
  testimonialQuote?: string;
}

/**
 * Helper function to convert internal project to public project
 */
export function toPublicProject(
  internal: InternalProject,
  displayTitle: string,
  highlights: string[],
  images: { featured: string; gallery?: string[]; before?: string; after?: string },
  projectType: 'full-property' | 'partial' = 'partial'
): PublicProject {
  return {
    slug: displayTitle.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
    title: displayTitle,
    location: `${internal.client.city}, ${internal.client.state}`,
    completionDate: internal.timeline.installComplete || 'In Progress',
    status: internal.status === 'completed' || internal.status === 'testimonial'
      ? 'completed'
      : 'in-progress',
    projectType,
    scope: internal.scope,
    highlights,
    featuredImage: images.featured,
    images: images.gallery,
    beforeImage: images.before,
    afterImage: images.after,
    hasTestimonial: internal.status === 'testimonial',
  };
}

/**
 * Quality score helper
 */
export function parseQualityScore(score: string): QualityScoreDetails | undefined {
  const match = score.match(/(\d)\/4 \(([^)]+)\)/);
  if (!match) return undefined;

  return {
    score: parseInt(match[1]) as QualityScore,
    label: match[2] as QualityScoreDetails['label'],
  };
}
