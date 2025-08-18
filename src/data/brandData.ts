export interface BrandSection {
  slug: string;
  title: string;
  description: string;
  color: string;
  content: {
    subtitle: string;
    sections: {
      title: string;
      items: string[];
    }[];
    images?: {
      src: string;
      alt: string;
      caption?: string;
    }[];
  };
}

export const brandSections: BrandSection[] = [
  {
    slug: 'intro',
    title: 'ДОБРО ПОЖАЛОВАТЬ',
    description: 'О бренде и назначение брендбука',
    color: '#10B981',
    content: {
      subtitle: 'База знаний бренда Onmyfeet',
      sections: [
        {
          title: 'Для кого',
          items: [
            'Менеджеры',
            'Дизайнеры',
            'Копирайтеры',
            'Продажники'
          ]
        },
        {
          title: 'Как пользоваться',
          items: [
            'Выберите раздел',
            'Изучите правила',
            'Применяйте в работе',
            'Следите за обновлениями'
          ]
        }
      ]
    }
  },
  {
    slug: 'colors',
    title: 'ЦВЕТА',
    description: 'Фирменная палитра',
    color: '#0A84FF',
    content: {
      subtitle: 'Основа визуальной идентичности',
      sections: [
        {
          title: 'Основная палитра',
          items: [
            'Primary: #111111',
            'Accent: #0A84FF',
            'Background: #FFFFFF'
          ]
        },
        {
          title: 'Использование',
          items: [
            'Белые фоны, много «воздуха»',
            'Акценты цветом и типографикой',
            'Контрастность для читаемости'
          ]
        }
      ]
    }
  },
  {
    slug: 'fonts',
    title: 'ШРИФТ',
    description: 'Базовая типографика',
    color: '#34D399',
    content: {
      subtitle: 'Типографическая система бренда',
      sections: [
        {
          title: 'Основные начертания',
          items: [
            'Coolvetica: Regular / Bold',
            'Для заголовков и акцентов',
            'Системные шрифты для текста'
          ]
        },
        {
          title: 'Применение',
          items: [
            'Заголовки: Bold, отрицательный трекинг',
            'Текст: Regular для читаемости',
            'Иерархия размеров'
          ]
        }
      ]
    }
  },
  {
    slug: 'logo',
    title: 'ЛОГО',
    description: 'Правила использования логотипа',
    color: '#F59E0B',
    content: {
      subtitle: 'Основной знак бренда',
      sections: [
        {
          title: 'Основное',
          items: [
            'Только утверждённые версии',
            'Минимальный размер: 24px',
            'Охранное поле вокруг логотипа'
          ]
        },
        {
          title: 'Недопустимо',
          items: [
            'Искажать пропорции',
            'Добавлять тени/градиенты',
            'Размещать на пёстрых фонах'
          ]
        }
      ],
      images: [
        {
          src: '/images/logo/logo-main.png',
          alt: 'Основной логотип Onmyfeet',
          caption: 'Основная версия логотипа'
        },
        {
          src: '/images/logo/logo-mono.png',
          alt: 'Монохромный логотип Onmyfeet',
          caption: 'Монохромная версия для тёмных фонов'
        }
      ]
    }
  },
  {
    slug: 'tone-of-voice',
    title: 'TONE OF VOICE',
    description: 'Тон и стиль коммуникаций',
    color: '#EF4444',
    content: {
      subtitle: 'Как мы говорим с аудиторией',
      sections: [
        {
          title: 'Принципы',
          items: [
            'Уверенно, просто, доброжелательно',
            'Без канцелярита и жаргона',
            'Понятно для всех'
          ]
        },
        {
          title: 'Примеры',
          items: [
            'Было: «Осуществляется обработка»',
            'Стало: «Обработаем за 1 минуту»',
            'Активный залог, конкретика'
          ]
        }
      ]
    }
  },
  {
    slug: 'naming',
    title: 'НАПИСАНИЕ НАЗВАНИЯ',
    description: 'Фирменное написание названия бренда',
    color: '#8B5CF6',
    content: {
      subtitle: 'Правила написания имени бренда',
      sections: [
        {
          title: 'Регистр и язык',
          items: [
            'Всегда: «Onmyfeet» (латиница)',
            'Без капслока',
            'В кавычках при склонении'
          ]
        },
        {
          title: 'Использование',
          items: [
            'В заголовках: жирное начертание',
            'В тексте: обычное',
            'Единообразие во всех материалах'
          ]
        }
      ]
    }
  },
  {
    slug: 'text-styling',
    title: 'ОФОРМЛЕНИЕ ТЕКСТОВ',
    description: 'Типографика и сетка',
    color: '#06B6D4',
    content: {
      subtitle: 'Структура и иерархия контента',
      sections: [
        {
          title: 'Сетка',
          items: [
            'Контентная ширина: 720–880px',
            'Межстрочный интервал: 1.5–1.7',
            'Отступы кратны 8px'
          ]
        },
        {
          title: 'Заголовки',
          items: [
            'H1: 48–64px, жирный',
            'H2: 32–40px, полужирный',
            'Чёткая иерархия размеров'
          ]
        }
      ]
    }
  },
  {
    slug: 'visual',
    title: 'ВИЗУАЛ',
    description: 'Фото, видео и графика',
    color: '#EC4899',
    content: {
      subtitle: 'Визуальный стиль бренда',
      sections: [
        {
          title: 'Стиль',
          items: [
            'Светлые чистые фоны',
            'Естественный свет',
            'Много пустого пространства'
          ]
        },
        {
          title: 'Фото',
          items: [
            'Нейтральная цветопередача',
            'Умеренный контраст',
            'Крупные и широкие планы'
          ]
        }
      ]
    }
  }
];
