export const queries: SanityQueries = {
  simulation: "/production?query=*%5B_type+%3D%3D+%22simulation%22%5D%5B0%5D",
  home: "/production?query=*%5B_type+%3D%3D+%22home%22%5D%5B0%5D",
  maintenance: "/production?query=*%5B_type+%3D%3D+%22maintenance%22%5D%5B0%5D",
  creators:
    "/production?query=%2F%2F+*%5B_type+%3D%3D+%22home%22%5D%5B0%5D%0A*%5B_type+%3D%3D+%22creators%22%5D%5B0%5D+%7B%0A++creatorsHeroTitle%2C%0A++creatorsHeroSubtitle%2C%0A++creatorsHeroFirstParagraph%2C%0A++creatorsHeroSecondParagraph%2C%0A++creatorsGridTitle%2C%0A++creatorsGridSubtitle%2C%0A++creatorsGridFirstParagraph%2C%0A++creatorsGridSecondParagraph%2C%0A++%22creators%22%3A+*%5B_type+%3D%3D+%27creator%27%5D+%7B%0A++++%22name%22%3A+creatorName%2C%0A++++%22role%22%3A+creatorRole%2C%0A++++%22image%22%3A+creatorImage.asset._ref%2C%0A++++%22socialNetworks%22%3A+creatorSocialNetworks%5B%5D+%7B%0A++++++%22name%22%3A+socialNetworkName%2C%0A++++++%22path%22%3A+socialNetworkUrl%0A++++%7D%0A++%7D%0A%7D",
  mentor:
    "/production?query=%0A*%5B_type+%3D%3D+%22mentor%22%5D%5B0%5D+%7B%0A++%0A++rules%2C+%0A++buttonToOpenTerms%2C%0A++buttonToCancel%2C%0A++buttonToSubmit%2C%0A++acceptTheTerms%2C%0A++%22steps%22%3A+steps%5B%5D+%7Bstep%2C+description%7D%2C%0A++title%2C%0A++termsTitle%2C%0A++LGPDWarning%2C%0A++LGPDWarningTitle%2C%0A++titleOfRules%2C++%0A++++%0A++%22terms%22%3A+terms%5B%5D+%7Border%2C+term%7D+%0A%7D%0A",
};
