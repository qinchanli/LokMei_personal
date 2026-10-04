import firstCover from '@/assets/sections/first/759741496349f5ca8b4f89f01caf4bc9.jpg';
import firstCollections01 from '@/assets/sections/first/collections/047b3fa811d066aebb8818eec711514f.jpg';
import firstCollections02 from '@/assets/sections/first/collections/202a8b8e7e8fc57f3e517f89dc5e0c55.png';
import firstCollections03 from '@/assets/sections/first/collections/bdd7c301e80e47533ad32b02d7fe3411.png';
import firstCollections04 from '@/assets/sections/first/collections/f8b1d108f3d0724e3f88c952c97f1d2c.png';

import section2Img01 from '@/assets/sections/section2/section2-01.png';
import section2Img02 from '@/assets/sections/section2/section2-02.png';
import section2Img03 from '@/assets/sections/section2/section2-03.png';
import section2Img04 from '@/assets/sections/section2/section2-04.png';
import section2Img05 from '@/assets/sections/section2/section2-05.jpg';

import section3Img01 from '@/assets/sections/section3/section3-01.jpg';
import section3Img02 from '@/assets/sections/section3/section3-02.jpg';
import section3Img03 from '@/assets/sections/section3/section3-03.jpg';
import section3Img04 from '@/assets/sections/section3/section3-04.jpg';
import section3Img05 from '@/assets/sections/section3/section3-05.jpg';
import section3Img06 from '@/assets/sections/section3/section3-06.jpg';

import section4Img01 from '@/assets/sections/section4/section4-01.jpg';
import section4Img02 from '@/assets/sections/section4/section4-02.jpg';
import section4Img03 from '@/assets/sections/section4/section4-03.jpg';
import section4Img04 from '@/assets/sections/section4/section4-04.jpg';

import section5Img01 from '@/assets/sections/section5/section5-01.jpg';
import section5Img02 from '@/assets/sections/section5/section5-02.jpg';
import section5Img03 from '@/assets/sections/section5/section5-03.jpg';
import section5Img04 from '@/assets/sections/section5/section5-04.jpg';
import section5Img05 from '@/assets/sections/section5/section5-05.jpg';

import section6Img01 from '@/assets/sections/section6/section6-01.jpg';
import section6Img02 from '@/assets/sections/section6/section6-02.jpg';
import section6Img03 from '@/assets/sections/section6/section6-03.jpg';
import section6Img04 from '@/assets/sections/section6/section6-04.jpg';
import section6Img05 from '@/assets/sections/section6/section6-05.jpg';

export type Work = {
  id: string;
  title: string;
  image: string;
  description: string;
};

export type Collection = {
  id: string;
  title: string;
  tagline: string;
  description: string;
  cover: string;
  works: Work[];
};

export const collections: Collection[] = [
  {
    id: 'brand-identity',
    title: 'Modeling work',
    tagline: 'Far Yet Found',
    description:
      'A series of identity engagements — logo systems, typography, and guidelines — built with partners who needed a foundation flexible enough to scale with them.',
    cover: firstCover,
    works: [
      {
        id: 'b1',
        title: 'Morphogenesis',
        image: firstCover,
        description:
          '',
      },
      {
        id: 'b6',
        title: 'Morphogenesis',
        image: firstCollections03,
        description:
          '',
      },
      {
        id: 'b7',
        title: 'Morphogenesis',
        image: firstCollections04,
        description:
          '',
      },
      {
        id: 'b8',
        title: 'Morphogenesis',
        image: firstCollections01,
        description:
          '',
      },
      {
        id: 'b9',
        title: 'Morphogenesis',
        image: firstCollections02,
        description:
          '',
      },
    ],
  },
  {
    id: 'web-design',
    title: 'projection installation',
    tagline: 'Shopping mall Cooperative projection system-Ridges of Cloud',
    description: 'Video for first two images: https://www.youtube.com/watch?v=yTAS15demt4\n\
      Illusion of Withered Twigs\n -Drawing on the metaphor of dead branches labelled as “rotten wood”, the work takes the pain of being dismissed and unvalued as its creative material.\
      Though withered branches cannot reverse past loss, art opens space for re‑imagination. Upon these barren, discarded structures, the artist visualises the sprouting they long for. It raises a critical question: Who gets to define talent? It further challenges whether those buried in obscurity must passively wait to be rescued by others.\
      Rather than waiting for external salvation, the piece conjures an imagined bloom for the overlooked.\n\n\
      Ridges of Cloud-The work channels the sinew of a fierce tiger into the structural logic of a mountain range, freezing its pouncing momentum into geometric facets. \
      Yet stasis is but a prelude—through projecting hand\'s control particals and shifting light, I awaken the dormant spiritual energy within each fold. Crucially, the sculpture resists any single vantage point. Just as different viewers perceive divergent aspects—the lowered haunch, the piercing gaze, the tensed spine—their fragmented visual impressions coalesce only through physical navigation.\
      The audience\'s circumambulation becomes an act of co-creation, where light breathes, particles pulse, and every shifted perspective reconstructs the ever-elusive spirit where human and beast converge. Video is here: https://www.youtube.com/watch?v=kEB36_rZI5Y',
    cover: section2Img01,
    works: [
      {
        id: 'w1',
        title: 'Ridges of Cloud',
        image: section2Img02,
        description:
          '',
      },
      {
        id: 'w2',
        title: 'Ridges of Cloud',
        image: section2Img01,
        description:
          '',
      },
      {
        id: 'w3',
        title: 'Illusion of Withered Twigs',
        image: section2Img03,
        description:
          '',
      },
      {
        id: 'w4',
        title: 'Illusion of Withered Twigs',
        image: section2Img04,
        description:
          '',
      },
      {
        id: 'w5',
        title: 'Illusion of Withered Twigs',
        image: section2Img05,
        description:
          '',
      },
      
    ],
  },
  {
    id: 'art-direction',
    title: 'Self-art project management',
    tagline: 'Portraiture-《21.一场伟大的腐烂与凋落10.》',
    description:
      'Portraiture has never been about the mere depiction of physical likeness, but rather about laying bare the absolute soul of the sitter.',
    cover: section3Img01,
    works: [
      {
        id: 'a1',
        title: 'Personal Practices',
        image: section3Img02,
        description:
          '',
      },
      {
        id: 'a2',
        title: 'Personal Practices',
        image: section3Img03,
        description:
          '',
      },
      {
        id: 'a3',
        title: 'Personal Practices',
        image: section3Img04,
        description:
          '',
      },
      {
        id: 'a4',
        title: 'Personal Practices',
        image: section3Img05,
        description:
          '',
      },
      {
        id: 'a5',
        title: 'Personal Practices',
        image: section3Img06,
        description:
          '',
      },
    ],
  },
  {
    id: 'editorial',
    title: 'colour pencil\'s project',
    tagline: 'Social media continues to update the project-《21.一场伟大的腐烂与凋落10.》',
    description:
      '',
    cover: section4Img01,
    works: [
      {
        id: 'e1',
        title: 'Personal Practices',
        image: section4Img02,
        description:
          '',
      },
      {
        id: 'e2',
        title: 'Personal Practices',
        image: section4Img03,
        description:
          '',
      },
      {
        id: 'e3',
        title: 'Personal Practices',
        image: section4Img04,
        description:
          '',
      },
      {
        id: 'e4',
        title: 'Personal Practices',
        image: section4Img01,
        description:
          '',
      },
      {
        id: 'e5',
        title: 'Personal Practices',
        image: section4Img02,
        description:
          '',
      },
    ],
  },
  {
    id: 'motion',
    title: 'non-traditional installation\'s sculpture',
    tagline: 'Three-dimensional wire light and shadow creative sculpture',
    description:
      'Transform the self into nature, and with everything around it—down to the subtlest evidence—reconstruct a living realm that vibrates with rhythmic vitality.',
    cover: section5Img01,
    works: [
      {
        id: 'm1',
        title: 'My nature, my world-installation, multiple material, 2025',
        image: section5Img02,
        description:
          "",
      },
      {
        id: 'm2',
        title: 'My nature, my world-installation, multiple material, 2025',
        image: section5Img03,
        description:
          '',
      },
      {
        id: 'm3',
        title: 'My nature, my world-installation, multiple material, 2025',
        image: section5Img04,
        description:
          '',
      },
      {
        id: 'm4',
        title: 'My nature, my world-installation, multiple material, 2025',
        image: section5Img05,
        description:
          '',
      },
      {
        id: 'm5',
        title: 'My nature, my world-installation, multiple material, 2025',
        image: section5Img01,
        description:
          '',
      },
    ],
  },
  {
    id: 'strategy',
    title: 'Commercial Creative Ceramics',
    tagline: 'Commercial Creative Ceramics, Studio  Collaborative Project-Creative Chinese Zodiac Artworks',
    description:
      '',
    cover: section6Img01,
    works: [
      {
        id: 's1',
        title: '镇岳驰怀\n\n',
        image: section6Img02,
        description:
          '一怀尾岳镇坤舆，火铸万壑出侧躯。莫道块垒无驰处，心锋额首向天衢。',
      },

      {
        id: 's2',
        title: '千林山君',
        image: section6Img03,
        description:
          '形山似虎，\
          虎负山而行。\
          砥砺前进，\
          不惧风雨。',
      },
      
      {
        id: 's3',
        title: '玉京子\n\n',
        image: section6Img04,
        description:
          '春染枯枝唤新生，\
          嫩翠渐浮旧枝上。\
          叶麟树身玉京子，\
          守得乙日不沧桑。',
      },
     
      {
        id: 's4',
        title: ' 江山游龙\n\n',
        image: section6Img05,
        description:
          '山延万里，\
          化龙之脊。\
          龙临江山，\
          福佑天地。',
      },
      {
        id: 's5',
        title: '飞兔迎春\n\n',
        image: section6Img01,
        description:
          '祥兔踏风迎春至，\
          携来一程吉祥意。',
      },
    ],
  },
];
