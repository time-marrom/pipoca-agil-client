export const queries: SanityQueries = {
  simulation: "/production?query=*%5B_type+%3D%3D+%22simulation%22%5D%5B0%5D",
  home: "/production?query=*%5B_type+%3D%3D+%22home%22%5D%5B0%5D",
  maintenance: "/production?query=*%5B_type+%3D%3D+%22maintenance%22%5D%5B0%5D",
  creators: "/production?query=%2F%2F+*%5B_type+%3D%3D+%22home%22%5D%5B0%5D%0A*%5B_type+%3D%3D+%22creators%22%5D%5B0%5D+%7B%0A++%22creators%22%3A+*%5B_type+%3D%3D+%27creator%27%5D+%7B%0A++++%22name%22%3A+creatorName%2C%0A++++%22role%22%3A+creatorRole%2C%0A++++%22image%22%3A+creatorImage.asset._ref%2C%0A++++%22socialNetworks%22%3A+creatorSocialNetworks%5B%5D+%7B%0A++++++%22name%22%3A+socialNetworkName%2C%0A++++++%22path%22%3A+socialNetworkUrl%0A++++%7D%0A++%7D%0A%7D"
}
