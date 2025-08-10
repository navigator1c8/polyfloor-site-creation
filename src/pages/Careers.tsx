import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Icon from '@/components/ui/icon';

export default function Careers() {
  const vacancies = [
    {
      title: "Технолог по полимерным покрытиям",
      department: "Производство",
      location: "Москва",
      type: "Полная занятость",
      salary: "от 120 000 ₽",
      experience: "от 3 лет",
      description: "Разработка технологических решений, контроль качества производства, внедрение новых материалов",
      requirements: [
        "Высшее техническое образование",
        "Опыт работы с полимерными материалами",
        "Знание ГОСТ и технических регламентов",
        "Готовность к командировкам"
      ],
      responsibilities: [
        "Контроль технологических процессов",
        "Разработка технических решений",
        "Обучение персонала",
        "Взаимодействие с клиентами"
      ]
    },
    {
      title: "Мастер участка",
      department: "Производство",
      location: "Москва, Санкт-Петербург",
      type: "Полная занятость",
      salary: "от 80 000 ₽",
      experience: "от 2 лет",
      description: "Руководство бригадой монтажников, контроль качества работ, соблюдение технологии",
      requirements: [
        "Среднее специальное образование",
        "Опыт руководства бригадой",
        "Знание технологий укладки полов",
        "Водительские права категории B"
      ],
      responsibilities: [
        "Организация работы бригады",
        "Контроль качества работ",
        "Ведение документации",
        "Обеспечение безопасности"
      ]
    },
    {
      title: "Монтажник полимерных покрытий",
      department: "Производство",
      location: "Москва, регионы",
      type: "Полная занятость",
      salary: "от 60 000 ₽",
      experience: "от 1 года",
      description: "Выполнение работ по устройству полимерных покрытий, подготовка поверхности",
      requirements: [
        "Опыт строительных работ",
        "Физическая выносливость",
        "Ответственность и аккуратность",
        "Готовность к командировкам"
      ],
      responsibilities: [
        "Подготовка поверхности",
        "Нанесение покрытий",
        "Соблюдение технологии",
        "Поддержание порядка на объекте"
      ]
    },
    {
      title: "Менеджер по продажам",
      department: "Продажи",
      location: "Москва",
      type: "Полная занятость",
      salary: "от 100 000 ₽ + %",
      experience: "от 2 лет",
      description: "Развитие клиентской базы, ведение переговоров, заключение договоров",
      requirements: [
        "Высшее образование",
        "Опыт продаж B2B",
        "Знание строительной отрасли",
        "Коммуникативные навыки"
      ],
      responsibilities: [
        "Поиск новых клиентов",
        "Ведение переговоров",
        "Подготовка коммерческих предложений",
        "Сопровождение сделок"
      ]
    },
    {
      title: "Инженер-проектировщик",
      department: "Проектирование",
      location: "Москва",
      type: "Полная занятость",
      salary: "от 90 000 ₽",
      experience: "от 2 лет",
      description: "Разработка проектной документации, технических решений, расчет материалов",
      requirements: [
        "Высшее техническое образование",
        "Знание AutoCAD, Revit",
        "Опыт проектирования полов",
        "Знание нормативной базы"
      ],
      responsibilities: [
        "Разработка проектов",
        "Расчет материалов",
        "Согласование с заказчиками",
        "Авторский надзор"
      ]
    },
    {
      title: "Специалист по качеству",
      department: "Качество",
      location: "Москва",
      type: "Полная занятость",
      salary: "от 85 000 ₽",
      experience: "от 3 лет",
      description: "Контроль качества продукции и услуг, ведение документации СМК",
      requirements: [
        "Высшее техническое образование",
        "Знание стандартов ISO",
        "Опыт работы в системе качества",
        "Внимательность к деталям"
      ],
      responsibilities: [
        "Контроль качества работ",
        "Ведение документации СМК",
        "Проведение аудитов",
        "Обучение персонала"
      ]
    }
  ];

  const benefits = [
    {
      title: "Конкурентная зарплата",
      description: "Достойная оплата труда + премии за результат",
      icon: "DollarSign"
    },
    {
      title: "Медицинская страховка",
      description: "ДМС для сотрудника и членов семьи",
      icon: "Heart"
    },
    {
      title: "Обучение и развитие",
      description: "Корпоративные тренинги и повышение квалификации",
      icon: "GraduationCap"
    },
    {
      title: "Карьерный рост",
      description: "Четкие перспективы профессионального развития",
      icon: "TrendingUp"
    },
    {
      title: "Современный офис",
      description: "Комфортные условия работы в центре Москвы",
      icon: "Building"
    },
    {
      title: "Корпоративные мероприятия",
      description: "Тимбилдинги, праздники, спортивные мероприятия",
      icon: "Users"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Icon name="Layers" className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">ShadePro</h1>
                <p className="text-xs text-gray-500">Полимерные покрытия</p>
              </div>
            </div>
            
            <nav className="hidden md:flex items-center space-x-8">
              <a href="/" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">Главная</a>
              <a href="/services" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">Услуги</a>
              <a href="/careers" className="text-blue-600 font-medium">Вакансии</a>
              <a href="/about" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">О нас</a>
              <a href="/contact" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">Контакты</a>
            </nav>

            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              Заказать звонок
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-6">
            <Badge className="bg-blue-100 text-blue-800 border-blue-200">Карьера</Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900">
              Присоединяйтесь к{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                команде профессионалов
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Мы ищем талантливых специалистов, готовых развиваться вместе с нами 
              и создавать лучшие полимерные покрытия в России.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-blue-100 text-blue-800 border-blue-200">Преимущества работы</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Что мы предлагаем
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon name={benefit.icon as any} className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Vacancies */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-blue-100 text-blue-800 border-blue-200">Открытые вакансии</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Актуальные предложения
            </h2>
          </div>

          <div className="space-y-8">
            {vacancies.map((vacancy, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    <div>
                      <CardTitle className="text-2xl">{vacancy.title}</CardTitle>
                      <CardDescription className="text-lg mt-2">
                        {vacancy.description}
                      </CardDescription>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <Badge className="bg-blue-100 text-blue-800">{vacancy.department}</Badge>
                      <Badge variant="secondary">{vacancy.location}</Badge>
                      <Badge variant="outline">{vacancy.type}</Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-green-50 p-4 rounded-lg">
                      <div className="text-2xl font-bold text-green-600 mb-1">{vacancy.salary}</div>
                      <div className="text-sm text-gray-600">Зарплата</div>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <div className="text-2xl font-bold text-blue-600 mb-1">{vacancy.experience}</div>
                      <div className="text-sm text-gray-600">Опыт работы</div>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <div className="text-2xl font-bold text-purple-600 mb-1">{vacancy.location}</div>
                      <div className="text-sm text-gray-600">Местоположение</div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Требования:</h4>
                      <div className="space-y-2">
                        {vacancy.requirements.map((req, reqIndex) => (
                          <div key={reqIndex} className="flex items-start space-x-2">
                            <Icon name="CheckCircle" className="w-4 h-4 text-green-600 mt-0.5" />
                            <span className="text-sm text-gray-700">{req}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Обязанности:</h4>
                      <div className="space-y-2">
                        {vacancy.responsibilities.map((resp, respIndex) => (
                          <div key={respIndex} className="flex items-start space-x-2">
                            <Icon name="ArrowRight" className="w-4 h-4 text-blue-600 mt-0.5" />
                            <span className="text-sm text-gray-700">{resp}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button className="bg-gradient-to-r from-blue-600 to-purple-600">
                      <Icon name="Send" className="w-4 h-4 mr-2" />
                      Откликнуться
                    </Button>
                    <Button variant="outline">
                      <Icon name="Bookmark" className="w-4 h-4 mr-2" />
                      Сохранить
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center space-y-4 mb-12">
              <Badge className="bg-blue-100 text-blue-800 border-blue-200">Отклик на вакансию</Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                Отправить резюме
              </h2>
              <p className="text-xl text-gray-600">
                Заполните форму и мы свяжемся с вами в ближайшее время
              </p>
            </div>

            <Card className="shadow-xl">
              <CardContent className="p-8 space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Имя *</label>
                    <Input placeholder="Ваше имя" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Фамилия *</label>
                    <Input placeholder="Ваша фамилия" required />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                    <Input type="email" placeholder="your@email.com" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Телефон *</label>
                    <Input type="tel" placeholder="+7 (___) ___-__-__" required />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Вакансия</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Выберите вакансию" />
                    </SelectTrigger>
                    <SelectContent>
                      {vacancies.map((vacancy, index) => (
                        <SelectItem key={index} value={vacancy.title}>
                          {vacancy.title}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Сопроводительное письмо</label>
                  <Textarea 
                    rows={4}
                    placeholder="Расскажите о себе, своем опыте и мотивации..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Резюме</label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                    <Icon name="Upload" className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                    <p className="text-gray-600">Перетащите файл сюда или нажмите для выбора</p>
                    <p className="text-sm text-gray-500 mt-1">PDF, DOC, DOCX до 5 МБ</p>
                  </div>
                </div>

                <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 text-lg">
                  <Icon name="Send" className="w-5 h-5 mr-2" />
                  Отправить резюме
                </Button>

                <p className="text-xs text-gray-500 text-center">
                  Отправляя резюме, вы соглашаетесь с{' '}
                  <a href="/privacy" className="text-blue-600 hover:underline">политикой конфиденциальности</a>
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}