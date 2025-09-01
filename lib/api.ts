import { Article, Category, Author } from "@/types";

// This is a mock API client that would be replaced with your actual CMS API client
// For example, if using Sanity.io, you would import their client here

const MOCK_CATEGORIES: Category[] = [
  {
    id: "1",
    name: "Technology",
    slug: "technology",
    description: "Latest in tech",
  },
  {
    id: "2",
    name: "Business",
    slug: "business",
    description: "Business insights",
  },
  {
    id: "3",
    name: "Science",
    slug: "science",
    description: "Scientific discoveries",
  },
  {
    id: "4",
    name: "Health",
    slug: "health",
    description: "Health and wellness",
  },
];

const MOCK_AUTHORS: Author[] = [
  {
    id: "1",
    name: "Jane Smith",
    bio: "Tech journalist with over 10 years of experience covering emerging technologies.",
    avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
    twitter: "janesmith",
  },
  {
    id: "2",
    name: "John Doe",
    bio: "Business analyst specializing in startup economics and market trends.",
    avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
    twitter: "johndoe",
  },
  {
    id: "3",
    name: "Emily Chen",
    bio: "Science writer with a background in molecular biology and genetics.",
    avatar: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
    twitter: "emilychen",
  },
];

const MOCK_ARTICLES: Article[] = [
  {
    id: "1",
    title: "The Future of Artificial Intelligence in Healthcare",
    slug: "future-ai-healthcare",
    excerpt:
      "How AI is transforming diagnosis, treatment, and patient care in modern medicine.",
    content: `
# The Future of Artificial Intelligence in Healthcare

Artificial intelligence is revolutionizing healthcare in unprecedented ways. From diagnosis to treatment planning and patient care, AI tools are becoming indispensable to medical professionals worldwide.

## Diagnostic Revolution

Machine learning algorithms can now detect patterns in medical imaging that might be missed by the human eye. Deep learning models trained on millions of images can identify early signs of diseases like cancer with remarkable accuracy.

## Personalized Treatment

AI systems analyze vast amounts of patient data to recommend personalized treatment plans. By considering genetic factors, medical history, and lifestyle information, these systems help doctors make more informed decisions.

## Challenges and Ethical Considerations

Despite the promising advances, there are significant challenges to overcome:

- Ensuring data privacy and security
- Addressing algorithmic bias
- Maintaining the human element in patient care
- Regulatory approval processes

As we move forward, striking the right balance between technological innovation and ethical considerations will be crucial for realizing the full potential of AI in healthcare.
    `,
    coverImage:
      "https://images.pexels.com/photos/3825586/pexels-photo-3825586.jpeg",
    publishedAt: "2025-05-15T10:00:00Z",
    author: MOCK_AUTHORS[0],
    category: MOCK_CATEGORIES[0],
    featured: true,
    readingTime: 8,
  },
  {
    id: "2",
    title: "Sustainable Business Models for the 21st Century",
    slug: "sustainable-business-models",
    excerpt:
      "Exploring how companies are adapting to environmental challenges while maintaining profitability.",
    content: `
# Sustainable Business Models for the 21st Century

As environmental concerns become increasingly urgent, businesses are finding innovative ways to reduce their ecological footprint while maintaining profitability. This shift represents one of the most significant business transformations of our time.

## The Circular Economy

Leading companies are moving away from the traditional "take-make-waste" model toward a circular approach. By designing products for reuse, recycling, and upcycling, businesses can minimize waste and maximize resource efficiency.

## Renewable Energy Investments

Major corporations are making significant investments in renewable energy:

1. On-site solar and wind installations
2. Power purchase agreements with renewable energy providers
3. Research and development in energy storage technologies

## Consumer Demand and Market Response

Today's consumers are more environmentally conscious than ever before. Brands that authentically embrace sustainability are seeing stronger customer loyalty and market growth.

The transition to sustainable business practices isn't just an ethical imperative—it's becoming a competitive necessity in the modern marketplace.
    `,
    coverImage:
      "https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg",
    publishedAt: "2025-05-10T14:30:00Z",
    author: MOCK_AUTHORS[1],
    category: MOCK_CATEGORIES[1],
    featured: true,
    readingTime: 6,
  },
  {
    id: "3",
    title: "Breakthroughs in Quantum Computing",
    slug: "quantum-computing-breakthroughs",
    excerpt:
      "Recent advances that could bring quantum computing into practical applications sooner than expected.",
    content: `
# Breakthroughs in Quantum Computing

Quantum computing research has accelerated dramatically in recent years, bringing us closer to practical applications that could revolutionize fields from cryptography to drug discovery.

## Key Developments

Researchers have made significant progress in addressing quantum decoherence, one of the major challenges in building stable quantum computers. New error correction techniques and material science innovations are extending the operational lifetime of qubits.

## Industry Applications

Several industries stand to benefit enormously from quantum computing:

- **Pharmaceuticals**: Simulating molecular interactions for drug discovery
- **Finance**: Optimizing trading strategies and risk assessment
- **Logistics**: Solving complex routing problems
- **Cybersecurity**: Developing post-quantum cryptography

## Timeline to Practical Implementation

While universal quantum computers may still be years away, specialized quantum processors for specific applications could become commercially viable within the next 2-3 years.

The quantum computing race has significant geopolitical implications, with major investments coming from governments and private companies around the world.
    `,
    coverImage:
      "https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg",
    publishedAt: "2025-05-05T09:15:00Z",
    author: MOCK_AUTHORS[2],
    category: MOCK_CATEGORIES[2],
    featured: false,
    readingTime: 7,
  },
  {
    id: "4",
    title: "Nutrition Science: Separating Fact from Fiction",
    slug: "nutrition-science-facts",
    excerpt:
      "A scientific look at popular nutrition claims and what the research actually says.",
    content: `
# Nutrition Science: Separating Fact from Fiction

In an age of information overload, nutrition advice is often contradictory and confusing. This article examines popular nutrition claims through the lens of scientific evidence.

## The Protein Debate

How much protein do we really need? While athletes and active individuals may benefit from higher protein intake, research suggests that most people in developed countries already consume more than enough protein for optimal health.

## Carbohydrates: Friend or Foe?

The demonization of carbohydrates fails to distinguish between different types and their effects on health:

- Refined carbohydrates and added sugars are associated with negative health outcomes
- Whole food sources of carbohydrates, including fruits, vegetables, and whole grains, are linked to numerous health benefits

## The Role of Dietary Fat

Our understanding of dietary fat has evolved significantly:

1. Trans fats remain harmful and are being phased out globally
2. Saturated fat appears more nuanced than previously thought
3. Unsaturated fats, especially omega-3s, offer health benefits

## Personalized Nutrition

Perhaps most importantly, emerging research suggests that individual responses to foods vary significantly based on genetics, microbiome composition, and lifestyle factors.

The future of nutrition may involve personalized approaches rather than one-size-fits-all dietary guidelines.
    `,
    coverImage:
      "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg",
    publishedAt: "2025-04-30T16:45:00Z",
    author: MOCK_AUTHORS[2],
    category: MOCK_CATEGORIES[3],
    featured: false,
    readingTime: 5,
  },
  {
    id: "5",
    title: "The Rise of Edge Computing",
    slug: "edge-computing-rise",
    excerpt:
      "How processing data closer to its source is changing the technology landscape.",
    content: `
# The Rise of Edge Computing

As IoT devices proliferate and real-time processing becomes increasingly important, edge computing is emerging as a critical paradigm in modern technology infrastructure.

## Beyond the Cloud

While cloud computing has dominated the technology landscape for years, edge computing addresses several limitations by processing data closer to where it's generated:

- Reduced latency for time-sensitive applications
- Lower bandwidth requirements
- Enhanced privacy and security
- Improved reliability in areas with limited connectivity

## Real-World Applications

Edge computing is already making an impact across multiple sectors:

### Smart Cities

Traffic management systems use edge devices to process video feeds locally, making real-time decisions about traffic light timing without sending all data to a central server.

### Industrial IoT

Manufacturing facilities deploy edge computing to monitor equipment health and detect anomalies instantly, preventing costly downtime.

### Autonomous Vehicles

Self-driving cars process sensor data on board, allowing for split-second decisions essential for passenger safety.

## The Hybrid Future

Rather than replacing cloud computing, edge computing is creating a more distributed architecture where processing occurs at the most appropriate location based on specific requirements.

As 5G networks expand and edge hardware becomes more powerful, we can expect to see increasingly sophisticated applications at the edge.
    `,
    coverImage:
      "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg",
    publishedAt: "2025-04-25T11:20:00Z",
    author: MOCK_AUTHORS[0],
    category: MOCK_CATEGORIES[0],
    featured: true,
    readingTime: 6,
  },
];

// API functions
export async function getFeaturedArticles(): Promise<Article[]> {
  // In a real implementation, this would fetch from your CMS API
  return MOCK_ARTICLES.filter((article) => article.featured);
}

export async function getLatestArticles(limit: number = 6): Promise<Article[]> {
  // In a real implementation, this would fetch from your CMS API
  return [...MOCK_ARTICLES]
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    )
    .slice(0, limit);
}

export async function getAllArticles(): Promise<Article[]> {
  // In a real implementation, this would fetch from your CMS API
  return MOCK_ARTICLES;
}

export async function getArticleBySlug(slug: string): Promise<Article | null> {
  // In a real implementation, this would fetch from your CMS API
  return MOCK_ARTICLES.find((article) => article.slug === slug) || null;
}

export async function getArticlesByCategory(
  categorySlug: string
): Promise<Article[]> {
  // In a real implementation, this would fetch from your CMS API
  return MOCK_ARTICLES.filter(
    (article) => article.category.slug === categorySlug
  );
}

export async function getAllCategories(): Promise<Category[]> {
  // In a real implementation, this would fetch from your CMS API
  return MOCK_CATEGORIES;
}

export async function getCategoryBySlug(
  slug: string
): Promise<Category | null> {
  // In a real implementation, this would fetch from your CMS API
  return MOCK_CATEGORIES.find((category) => category.slug === slug) || null;
}

export async function getAllAuthors(): Promise<Author[]> {
  // In a real implementation, this would fetch from your CMS API
  return MOCK_AUTHORS;
}

export async function searchArticles(query: string): Promise<Article[]> {
  // In a real implementation, this would search through your CMS content
  const lowerQuery = query.toLowerCase();
  return MOCK_ARTICLES.filter(
    (article) =>
      article.title.toLowerCase().includes(lowerQuery) ||
      article.excerpt.toLowerCase().includes(lowerQuery) ||
      article.content.toLowerCase().includes(lowerQuery)
  );
}
