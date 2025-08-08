import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from '@/components/ui/icon';

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200 sticky top-0 bg-white/95 backdrop-blur-sm z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
              <Icon name="Layers" className="h-6 w-6 text-white" />
            </div>
            <h1 className="text-xl font-bold text-gray-900">ПолиПро</h1>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-gray-600 hover:text-blue-500 transition-colors">Услуги</a>
            <a href="#about" className="text-gray-600 hover:text-blue-500 transition-colors">О компании</a>
            <a href="#contact" className="text-gray-600 hover:text-blue-500 transition-colors">Контакты</a>
            <a href="#articles" className="text-gray-600 hover:text-blue-500 transition-colors">Статьи</a>
          </nav>
          <Button className="bg-blue-500 hover:bg-blue-600 text-white">
            Заказать услугу
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">
                Профессиональные полимерные покрытия
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Качественная укладка полимерных покрытий полов
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Создаем долговечные, красивые и функциональные полы для промышленных и коммерческих объектов. 
                Гарантия качества до 15 лет.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-white">
                  <Icon name="Phone" className="w-5 h-5 mr-2" />
                  Получить консультацию
                </Button>
                <Button size="lg" variant="outline" className="border-gray-300">
                  <Icon name="Calculator" className="w-5 h-5 mr-2" />
                  Рассчитать стоимость
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/img/3af2a4ee-f64a-49a2-bf27-ce7fe23c5731.jpg" 
                alt="Профессиональная укладка полимерных покрытий"
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <Icon name="CheckCircle" className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Гарантия качества</p>
                    <p className="text-sm text-gray-600">До 15 лет</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">Наши услуги</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Полный спектр работ с полимерными покрытиями
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              От подготовки основания до финишного покрытия — мы выполним все работы под ключ
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "Layers",
                title: "Эпоксидные покрытия",
                description: "Прочные и долговечные покрытия для промышленных объектов с высокой химической стойкостью.",
                features: ["Износостойкость", "Химическая стойкость", "Антискольжение"]
              },
              {
                icon: "Shield",
                title: "Полиуретановые покрытия", 
                description: "Эластичные покрытия с высокой устойчивостью к механическим воздействиям.",
                features: ["Эластичность", "УФ-стойкость", "Декоративность"]
              },
              {
                icon: "Sparkles",
                title: "Декоративные покрытия",
                description: "Красивые покрытия с различными эффектами для коммерческих и жилых помещений.",
                features: ["3D эффекты", "Металлик", "Чипсы"]
              },
              {
                icon: "Wrench",
                title: "Подготовка основания",
                description: "Профессиональная подготовка поверхности для максимальной адгезии покрытия.",
                features: ["Шлифовка", "Обеспыливание", "Грунтование"]
              },
              {
                icon: "Truck",
                title: "Промышленные полы",
                description: "Специальные покрытия для складов, производств и логистических центров.",
                features: ["Высокие нагрузки", "Быстрое высыхание", "Разметка"]
              },
              {
                icon: "Home",
                title: "Наливные полы",
                description: "Идеально ровные самовыравнивающиеся покрытия для любых помещений.",
                features: ["Идеальная ровность", "Быстрый монтаж", "Гигиеничность"]
              }
            ].map((service, index) => (
              <Card key={index} className="border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon name={service.icon as any} className="w-6 h-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl text-gray-900">{service.title}</CardTitle>
                  <CardDescription className="text-gray-600">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature, featureIndex) => (
                      <Badge key={featureIndex} variant="secondary" className="bg-gray-100 text-gray-700">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <img 
                src="/img/72f4b2bc-8448-4df2-bf59-959d09008849.jpg" 
                alt="Современное производственное помещение с полимерными полами"
                className="rounded-2xl shadow-xl w-full"
              />
            </div>
            <div className="space-y-8">
              <div>
                <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100 mb-4">О компании</Badge>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                  Более 10 лет опыта в укладке полимерных покрытий
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Мы специализируемся на создании качественных полимерных покрытий для промышленных, 
                  коммерческих и жилых объектов. Наша команда профессионалов использует только 
                  сертифицированные материалы от ведущих производителей.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  { number: "500+", label: "Выполненных проектов" },
                  { number: "15 лет", label: "Гарантия на работы" },
                  { number: "24/7", label: "Техническая поддержка" },
                  { number: "100%", label: "Довольных клиентов" }
                ].map((stat, index) => (
                  <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                    <div className="text-2xl font-bold text-blue-600 mb-2">{stat.number}</div>
                    <div className="text-gray-700">{stat.label}</div>
                  </div>
                ))}
              </div>

              <Card className="bg-blue-50 border-blue-200">
                <CardHeader>
                  <CardTitle className="flex items-center text-blue-900">
                    <Icon name="Shield" className="w-6 h-6 mr-3 text-blue-600" />
                    Гарантийные обязательства
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-blue-800">
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <Icon name="Check" className="w-4 h-4 mr-2 text-blue-600" />
                      Гарантия на материалы до 15 лет
                    </li>
                    <li className="flex items-center">
                      <Icon name="Check" className="w-4 h-4 mr-2 text-blue-600" />
                      Гарантия на работы до 5 лет
                    </li>
                    <li className="flex items-center">
                      <Icon name="Check" className="w-4 h-4 mr-2 text-blue-600" />
                      Бесплатное обслуживание в течение года
                    </li>
                    <li className="flex items-center">
                      <Icon name="Check" className="w-4 h-4 mr-2 text-blue-600" />
                      Страхование ответственности
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <section id="articles" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">Полезные статьи</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Экспертные знания о полимерных покрытиях
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Как выбрать полимерное покрытие для производства",
                excerpt: "Подробное руководство по выбору оптимального типа покрытия в зависимости от условий эксплуатации.",
                date: "15 декабря 2024",
                readTime: "8 мин"
              },
              {
                title: "Подготовка основания: критически важный этап",
                excerpt: "Почему качественная подготовка поверхности определяет долговечность покрытия на 80%.",
                date: "10 декабря 2024",
                readTime: "6 мин"
              },
              {
                title: "Технология нанесения эпоксидных покрытий",
                excerpt: "Пошаговый процесс профессионального нанесения эпоксидных систем с соблюдением всех требований.",
                date: "5 декабря 2024",
                readTime: "10 мин"
              }
            ].map((article, index) => (
              <Card key={index} className="border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                    <span>{article.date}</span>
                    <span>{article.readTime}</span>
                  </div>
                  <CardTitle className="text-xl text-gray-900 leading-tight">
                    {article.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {article.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full border-gray-300">
                    Читать далее
                    <Icon name="ArrowRight" className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div>
                <Badge className="bg-blue-500/20 text-blue-300 hover:bg-blue-500/20 mb-4">Свяжитесь с нами</Badge>
                <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                  Получите бесплатную консультацию
                </h2>
                <p className="text-xl text-gray-300">
                  Обсудим ваш проект, подберем оптимальное решение и рассчитаем стоимость работ.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Phone" className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Телефон</h3>
                    <p className="text-gray-300">+7 (495) 123-45-67</p>
                    <p className="text-gray-300">+7 (800) 800-80-80</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Mail" className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Email</h3>
                    <p className="text-gray-300">info@polipro.ru</p>
                    <p className="text-gray-300">sales@polipro.ru</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPin" className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Адрес</h3>
                    <p className="text-gray-300">г. Москва, ул. Промышленная, 15</p>
                    <p className="text-gray-300">БЦ "Технопарк", офис 201</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Clock" className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Режим работы</h3>
                    <p className="text-gray-300">Пн-Пт: 9:00 - 18:00</p>
                    <p className="text-gray-300">Сб-Вс: по предварительной записи</p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="bg-white/5 border-white/10">
              <CardHeader>
                <CardTitle className="text-white">Оставить заявку</CardTitle>
                <CardDescription className="text-gray-300">
                  Заполните форму и мы свяжемся с вами в течение часа
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Имя</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500" 
                      placeholder="Ваше имя"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Телефон</label>
                    <input 
                      type="tel" 
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500" 
                      placeholder="+7 (___) ___-__-__"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500" 
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Сообщение</label>
                  <textarea 
                    rows={4}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none" 
                    placeholder="Расскажите о вашем проекте..."
                  />
                </div>

                <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3">
                  <Icon name="Send" className="w-5 h-5 mr-2" />
                  Отправить заявку
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                <Icon name="Layers" className="h-5 w-5 text-white" />
              </div>
              <span className="text-white font-semibold">ПолиПро</span>
            </div>
            
            <div className="text-gray-400 text-sm text-center md:text-right">
              <p>&copy; 2024 ПолиПро. Все права защищены.</p>
              <p className="mt-1">Профессиональные полимерные покрытия полов</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}