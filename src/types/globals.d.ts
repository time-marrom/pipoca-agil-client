type RootLayoutProps = {
  children: React.ReactNode;
};

type SanityQueries = {
  maintenance: string;
  home: string;
  simulation: string;
};

type MaintenanceContent = {
  title: string;
  description: string;
};

type HomeContent = {
  title: string;
  description: string;
  imageURL: string;
  imageAlt: string;
  heroButtonLabel: string;
  heroTopics: string[];
  simulationSectionTitle: string;
  simulationSectionDescription: string;
  simulationSectionTopics: string[];
  simulationSectionMemberButtonLabel: string;
  simulationSectionMentorButtonLabel: string;
  podcastSectionTitle: string;
  podcastSectionDescription: string;
  popcornClubSectionTitle: string;
  popcornClubSectionDescription: string;
  popcornClubSectionButtonLabel: string;
  agileTrailSectionTitle: string;
  agileTrailSectionDescription: string;
  agileTrailSectionButtonLabel: string;
  popcornIndicationSectionTitle: string;
  popcornIndicationSectionDescription: string;
  popcornIndicationSectionButtonLabel: string;
  newsletterSectionTitle: string;
  newsletterSectionDescription: string;
  newsletterSectionButtonLabel: string;
};

type MenuOption = {
  name: string;
  path: string;
  icon?: string;
  text?: string;
  order: number;
  options?: string[];
};

type Social = {
  order: number;
  name: string;
  path: string;
  icon: ElementType;
};

type MaintenanceContentProps = {
  content: MaintenanceContent;
};

type PageContainerProps = RootLayoutProps;

type SimulationContent = {
  heroTitle: string;
  heroSubtitle: string;
  heroLabelButton: string;
  overviewPanelTitle: string;
  overviewPanelSubtitle: string;
  overviewPanelTopics: string[];
  howToPanelTitle: string;
  howToPanelSubtitle: string;
  howToPanelTopics: string[];
  whoIsPanelTitle: string;
  volunteerText: string;
  volunteerLabelButton: string;
  mentorText: string;
  mentorLabelButton: string;
  metricsPanelTitle: string;
  metricsPanelObject: MetricObject[];
  faqPanelTitle: string;
  faqPanelQuestions: FaqQuestion[];
};

interface MetricObject {
  number: number;
  metric: string;
}

interface FaqQuestion {
  question: string;
  answer: string;
}
