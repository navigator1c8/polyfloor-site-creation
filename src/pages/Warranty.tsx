import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from '@/components/ui/icon';

export default function Warranty() {
  const warrantyTypes = [
    {
      id: "standard",
      name: "Стандартная гарантия",
      duration: "5-10 лет",
      coverage: [
        "Отслоение покрытия от основания",
        "Появление трещин и сколов",
        "Потеря декоративных свойств",
        "Износ в пределах нормы"
      ],
      conditions: [
        "Соблюдение технологии укладки",
        "Использование оригинальных материалов",
        "Правильная эксплуатация покрытия",
        "Своевременное обслуживание"
      ]
    },
    {
      id: "extended",
      name: "Расширенная гарантия",
      duration: "15-20 лет",
      coverage: [
        "Все пункты стандартной гарантии",
        "Химическая стойкость покрытия",
        "Антистатические свойства",
        "Устойчивость к УФ-излучению",
        "Бесплатное техобслуживание"
      ],
      conditions: [
        "Заключение договора на обслуживание",
        "Использование премиум материалов",
        "Профессиональная эксплуатация",
        "Регулярные осмотры специалистов"
      ]
    },
    {
      id: "premium",
      name: "Премиум гарантия",
      duration: "до 25 лет",
      coverage: [
        "Полная замена покрытия при дефектах",
        "Компенсация простоя производства",
        "Экстренное восстановление 24/7",
        "Модернизация покрытия",
        "Консультации технолога"
      ],
      conditions: [
        "Объект площадью от 1000 м²",
        "Использование топовых материалов",
        "Договор полного сервиса",
        "Соблюдение всех рекомендаций"
      ]
    }
  ];

  const serviceSteps = [
    {
      step: "1",
      title: "Обращение",
      description: "Звонок или заявка через сайт",
      icon: "Phone"
    },
    {
      step: "2", 
      title: "Диагностика",
      description: "Выезд специалиста в течение 24 часов",
      icon: "Search"
    },
    {
      step: "3",
      title: "Решение",
      description: "Определение причин и способов устранения",
      icon: "Settings"
    },
    {
      step: "4",
      title: "Устранение",
      description: "Бесплатное устранение гарантийных дефектов",
      icon: "CheckCircle"
    }
  ];

  const faq = [
    {
      question: "Что входит в гарантийное обслуживание?",
      answer: "Бесплатное устранение всех дефектов, возникших по вине подрядчика или производителя материалов. Включает выезд специалиста, диагностику и ремонт."
    },
    {
      question: "Как быстро реагируете на гарантийные случаи?",
      answer: "Выезд специалиста в течение 24 часов с момента обращения. Для критичных объектов - экстренный выезд в течение 4 часов."
    },
    {
      question: "Что не покрывается гарантией?",
      answer: "Механические повреждения, превышение допустимых нагрузок, воздействие неразрешенных химических веществ, нарушение правил эксплуатации."
    },
    {
      question: "Можно ли продлить гарантию?",
      answer: "Да, при заключении договора на техническое обслуживание гарантия может быть продлена до 25 лет."
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
              <a href="/warranty" className="text-blue-600 font-medium">Гарантии</a>
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
            <Badge className="bg-blue-100 text-blue-800 border-blue-200">Гарантии</Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900">
              Гарантия качества{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                до 25 лет
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Мы настолько уверены в качестве наших покрытий, что предоставляем 
              одну из самых длительных гарантий на рынке.
            </p>
          </div>
        </div>
      </section>

      {/* Warranty Types */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {warrantyTypes.map((warranty, index) => (
              <Card key={index} className={`hover:shadow-xl transition-all duration-300 ${index === 1 ? 'border-2 border-blue-200 scale-105' : ''}`}>
                <CardHeader className={index === 1 ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-t-lg' : ''}>
                  {index === 1 && (
                    <Badge className="bg-white/20 text-white border-white/20 w-fit mb-2">
                      Популярный выбор
                    </Badge>
                  )}
                  <CardTitle className="text-2xl">{warranty.name}</CardTitle>
                  <CardDescription className={index === 1 ? 'text-blue-100' : ''}>
                    <span className="text-3xl font-bold">{warranty.duration}</span>
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6 p-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Что покрывается:</h4>
                    <div className="space-y-2">
                      {warranty.coverage.map((item, itemIndex) => (
                        <div key={itemIndex} className="flex items-start space-x-2">
                          <Icon name="CheckCircle" className="w-4 h-4 text-green-600 mt-0.5" />
                          <span className="text-sm text-gray-700">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Условия:</h4>
                    <div className="space-y-2">
                      {warranty.conditions.map((condition, condIndex) => (
                        <div key={condIndex} className="flex items-start space-x-2">
                          <Icon name="Info" className="w-4 h-4 text-blue-600 mt-0.5" />
                          <span className="text-sm text-gray-700">{condition}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Button className={`w-full ${index === 1 ? 'bg-gradient-to-r from-blue-600 to-purple-600' : ''}`}>
                    Выбрать гарантию
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-blue-100 text-blue-800 border-blue-200">Гарантийное обслуживание</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Как работает гарантийный сервис
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {serviceSteps.map((step, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto">
                  <Icon name={step.icon as any} className="w-8 h-8 text-white" />
                </div>
                <div className="text-sm font-semibold text-blue-600">Шаг {step.step}</div>
                <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-blue-100 text-blue-800 border-blue-200">Вопросы и ответы</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Часто задаваемые вопросы о гарантии
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {faq.map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{item.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{item.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Нужна гарантийная поддержка?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Обращайтесь к нам по любым вопросам гарантийного обслуживания. 
            Мы всегда готовы помочь!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              <Icon name="Phone" className="w-5 h-5 mr-2" />
              Гарантийная служба
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              <Icon name="FileText" className="w-5 h-5 mr-2" />
              Условия гарантии
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}