// The five programme areas. `summary` is used on the home page; the rest on Our Programmes.
export const programmes = [
  {
    id: "child-welfare",
    title: "Child Welfare, Education and Development",
    summary:
      "We support children's growth and well-being through feeding initiatives, early childhood care, educational support, mentorship and opportunities for healthy development.",
    introduction:
      "Our child-focused initiatives aim to support children's growth, well-being, education and development.",
    image: { src: "/photos/kids_daycare.jpg", alt: "Young children sharing a meal at the Kids Hub" },
    activities: [
      {
        title: "Feeding and Nutrition",
        text: "We provide food support to children and other beneficiaries facing food insecurity, helping address their nutritional needs and improve their general well-being.",
      },
      {
        title: "Education Support",
        text: "We support children's access to education through initiatives that respond to educational needs and help create opportunities for learning and development.",
      },
      {
        title: "Early Childhood Care and Development – Kids Hub",
        text: "Our Kids Hub initiative was established to provide a safe and supportive environment for young children, including early childhood care and Montessori-inspired learning activities.",
      },
      {
        title: "Spiritual and Personal Development",
        text: "Through our weekly Sunday School programme, children participate in Bible teaching, worship, meals and fellowship. These activities also encourage positive values, personal development and social interaction.",
      },
    ],
  },
  {
    id: "women-empowerment",
    title: "Women Empowerment and Livelihoods Support",
    summary:
      "We support women through initiatives that encourage personal development, social connection, practical empowerment and improved well-being.",
    introduction:
      "We support women through initiatives that encourage personal development, social connection, practical empowerment and improved well-being.",
    image: { src: "/photos/women_empowerment.jpg", alt: "Members of the women's group in Mathare" },
    activities: [
      {
        title: "Women's Group Sessions",
        text: "In Mathare, approximately 30 women participate in regular group sessions focused on personal growth, encouragement and shared learning.",
      },
      {
        title: "Mercy Basket Initiative",
        text: "Through the Mercy Basket Initiative, more than 150 women have received food support and opportunities for fellowship and community connection.",
      },
    ],
  },
  {
    id: "youth",
    title: "Youth Empowerment and Development",
    summary:
      "We engage young people through mentorship, sports and activities that promote discipline, teamwork, leadership, confidence and responsible decision-making.",
    introduction:
      "We engage young people through mentorship, sports and activities that promote discipline, teamwork, leadership, confidence and responsible decision-making.",
    image: { src: "/photos/sports_4.jpg", alt: "Youth football team in a huddle" },
    activities: [
      {
        title: "Youth Sports",
        text: "Our Youth Sports initiative currently engages approximately 25 young people, providing opportunities for personal development, positive relationships and constructive participation in their communities.",
      },
    ],
  },
  {
    id: "elderly-women",
    title: "Support for Elderly and Vulnerable Women",
    summary:
      "We work to improve the well-being and social inclusion of vulnerable elderly women, particularly widows who may face economic and social challenges.",
    introduction:
      "We work to improve the well-being and social inclusion of vulnerable elderly women, particularly widows who may face economic and social challenges.",
    image: { src: "/photos/migori.jpg", alt: "Elderly women in Migori standing in a maize field" },
    activities: [
      {
        title: "Food Support and Fellowship in Migori",
        text: "In Migori, approximately 40 elderly women receive food support and participate in regular fellowship activities that strengthen social connections, promote dignity and encourage mutual support.",
      },
    ],
  },
  {
    id: "community-outreach",
    title: "Community Outreach and Well-being",
    summary:
      "We engage communities through practical support and initiatives that respond to everyday needs, promote dignity and improve quality of life.",
    introduction:
      "We engage communities through practical support and initiatives that respond to everyday needs, promote dignity and improve quality of life.",
    image: { src: "/photos/december_2024_22.jpg", alt: "Community members receiving food packages" },
    activities: [
      {
        title: "Practical Support",
        text: "Our outreach includes the distribution of sanitary pads to teenage girls, education support and general assistance to individuals and families facing difficult circumstances.",
      },
      {
        title: "Responding to Community Needs",
        text: "Through these efforts, we seek to address community needs, create opportunities and ensure that vulnerable members of society feel supported.",
      },
    ],
  },
];

// Areas the organisation hopes to develop. Always presented as future priorities, never as running programmes.
export const futurePriorities = [
  {
    title: "Sewing and practical skills development",
    text: "Developing sewing initiatives that provide practical skills and opportunities for self-reliance and income generation.",
  },
  {
    title: "Arts and creative expression",
    text: "Encouraging arts and creative expression among children and young people.",
  },
  {
    title: "Music and podcast spaces",
    text: "Exploring music and podcast spaces where people can share stories and develop communication and production skills.",
  },
  {
    title: "Academic sponsorship and talent development",
    text: "Expanding academic sponsorship and opportunities for talent development in sports, music, arts and other areas.",
  },
];

// Headline figures for "Our Impact at a Glance". Update as programmes grow.
export const impactFigures = [
  {
    value: "350+",
    label: "Children Reached",
    detail: "Through feeding, early childhood care and Sunday School activities.",
  },
  { value: "25", label: "Young People", detail: "Engaged through youth sports and mentorship." },
  { value: "30", label: "Women", detail: "Participating in regular group sessions in Mathare." },
  { value: "40", label: "Elderly Women", detail: "Receiving food support and fellowship in Migori." },
];
