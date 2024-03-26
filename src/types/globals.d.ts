type RootLayoutProps = {
  children: React.ReactNode;
};

type SanityQueries = {
  maintenance: string;
  home: string;
  simulation: string;
  creators: string;
};

type MaintenanceContent = {
  title: string;
  description: string;
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

type StepsProps = {
  currentStep: number;
};

interface IRegistrationContainerProps {
  children: React.ReactNode;
}

// Validados

interface WorthItTopic {
  number: number;
  metric: string;
}

interface DepositionTopic {
  deposition: string;
  author: string;
}

interface FAQTopic {
  question: string;
  answer: string;
}

interface HomeContent {
  heroTitle: string;
  heroSubtitle: string;
  heroLabelButton: string;
  descriptionTitle: string;
  descriptionFirstParagraph: string;
  descriptionSecondParagraph: string;
  howItWorksTitle: string;
  howItWorksSubtitle: string;
  howItWorksTopics: string[];
  howIsItForTitle: string;
  howIsItForSubtitle: string;
  howIsItForVolunteerText: string;
  howIsItForVolunteerLabelButton: string;
  howIsItForMentorText: string;
  howIsItForMentorLabelButton: string;
  worthItTitle: string;
  worthItTopics: WorthItTopic[];
  depositionsTitle: string;
  depositionsTopics: DepositionTopic[];
  faqTitle: string;
  faqTopics: FAQTopic[];
}

interface CreatorSocialNetwork {
  name: string;
  path: string;
}

interface Creator {
  name: string
  role: string
  image: string
  socialNetworks: CreatorSocialNetwork[]
}

interface CreatorsContent {
  creatorsHeroTitle: string
  creatorsHeroSubtitle: string
  creatorsHeroFirstParagraph: string
  creatorsHeroSecondParagraph: string
  creatorsGridTitle: string
  creatorsGridSubtitle: string
  creatorsGridFirstParagraph: string
  creatorsGridSecondParagraph: string
  creators: Creator[]
}

interface SubscriptionSteps {
  step: number
  description: string
}

interface SubscriptionTerms {
  order: number
  term: string
}

interface SubscriptionContent {
  title: string
  steps: SubscriptionSteps[]
  warningTitle: string
  warning: string
  titleOfRules: string
  rules: string[]
  LGPDWarningTitle: string
  LGPDWarning: string
  buttonToOpenTerms: string
  terms: SubscriptionTerms[]
  acceptTheTerms: string
  buttonToSubmit: string
  buttonToCancel: string
}
