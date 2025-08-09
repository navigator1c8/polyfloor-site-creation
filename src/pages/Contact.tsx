import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Icon from '@/components/ui/icon';

export default function Contact() {
  const offices = [
    {
      city: "Москва",
      address: "Варшавское шоссе, 42, БЦ 'Оптима Плаза', 15 этаж",
      phone: "+7 (495) 123-45-67",
      email: "moscow@shade-pro.ru",
      hours: "Пн-Пт: 8:00-20:00, Сб-Вс: 10:00-18:00",
      isMain: true
    },
    {
      city: "Санкт-Петербург",
      address: "Невский проспект, 85, офис 301",
      phone: "+7 (812) 987-65-43",
      email: "spb@shade-pro.ru",
      hours: "Пн-Пт: 9:00-19:00, Сб: 10:00-16:00",
      isMain: false
    },
    {
      city: "Екатеринбург",
      address: "ул. Ленина, 24А, БЦ 'Высоцкий', 12 этаж",
      phone: "+7 (343) 555-12-34",
      email: "ekb@shade-pro.ru",
      hours: "Пн-Пт: 9:00-18:00",
      isMain: false
    },
    {
      city: "Новосибирск",
      address: "Красный проспект, 153, офис 205",
      phone: "+7 (383) 444-56-78",
      email: "nsk@shade-pro.ru",
      hours: "Пн-Пт: 9:00-18:00",
      isMain: false
    }
  ];

  const contactMethods = [
    {
      title: "Телефон",
      description: "Звоните в любое время",
      value: "+7 (800) 800-80-80",
      subValue: "Бесплатно по России",
      icon: "Phone",
      color: "from-green-500 to-emerald-600"
    },
    {
      title: "Email",
      description: "Напишите нам письмо",
      value: "info@shade-pro.ru",
      subValue: "Ответим в течение часа",
      icon: "Mail",
      color: "from-blue-500 to-cyan-600"
    },
    {
      title: "WhatsApp",
      description: "Быстрая связь в мессенджере",
      value: "+7 (495) 123-45-67",
      subValue: "Онлайн 24/7",
      icon: "MessageCircle",
      color: "from-green-400 to-green-600"
    },
    {
      title: "Telegram",
      description: "Техническая поддержка",
      value: "@shadepro_support",
      subValue: "Быстрые ответы",
      icon: "Send",
      color: "from-blue-400 to-blue-600"
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
              <a href="/portfolio" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">Портфолио</a>
              <a href="/about" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">О нас</a>
              <a href="/contact" className="text-blue-600 font-medium">Контакты</a>
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
            <Badge className="bg-blue-100 text-blue-800 border-blue-200">Контакты</Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900">
              Свяжитесь с нами{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                любым удобным способом
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Мы работаем по всей России. Бесплатная консультация, выезд технолога 
              и составление сметы для вашего проекта.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 group">
                <CardHeader>
                  <div className={`w-16 h-16 bg-gradient-to-r ${method.color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon name={method.icon as any} className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">{method.title}</CardTitle>
                  <CardDescription>{method.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="font-semibold text-gray-900">{method.value}</div>
                  <div className="text-sm text-gray-600">{method.subValue}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <Card className="shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl">Оставить заявку</CardTitle>
                <CardDescription className="text-lg">
                  Заполните форму и наш специалист свяжется с вами в течение 15 минут
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Имя *</label>
                    <Input placeholder="Ваше имя" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Телефон *</label>
                    <Input type="tel" placeholder="+7 (___) ___-__-__" required />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <Input type="email" placeholder="your@email.com" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Тип покрытия</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Выберите тип покрытия" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="epoxy">Эпоксидное покрытие</SelectItem>
                      <SelectItem value="polyurethane">Полиуретановое покрытие</SelectItem>
                      <SelectItem value="leveling">Наливной пол</SelectItem>
                      <SelectItem value="decorative">Декоративное покрытие</SelectItem>
                      <SelectItem value="other">Другое</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Площадь (м²)</label>
                    <Input type="number" placeholder="Например: 500" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Город</label>
                    <Input placeholder="Ваш город" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Комментарий</label>
                  <Textarea 
                    rows={4}
                    placeholder="Опишите ваш проект, особые требования или задайте вопросы..."
                  />
                </div>

                <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 text-lg">
                  <Icon name="Send" className="w-5 h-5 mr-2" />
                  Отправить заявку
                </Button>

                <p className="text-xs text-gray-500 text-center">
                  Нажимая кнопку, вы соглашаетесь с{' '}
                  <a href="/privacy" className="text-blue-600 hover:underline">политикой конфиденциальности</a>
                </p>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Наши офисы</h2>
                <div className="space-y-6">
                  {offices.map((office, index) => (
                    <Card key={index} className={`${office.isMain ? 'border-blue-200 bg-blue-50' : ''}`}>
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-xl">{office.city}</CardTitle>
                          {office.isMain && (
                            <Badge className="bg-blue-600 text-white">Главный офис</Badge>
                          )}
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <div className="flex items-start space-x-3">
                          <Icon name="MapPin" className="w-5 h-5 text-gray-500 mt-0.5" />
                          <span className="text-gray-700">{office.address}</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Icon name="Phone" className="w-5 h-5 text-gray-500" />
                          <span className="text-gray-700">{office.phone}</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Icon name="Mail" className="w-5 h-5 text-gray-500" />
                          <span className="text-gray-700">{office.email}</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Icon name="Clock" className="w-5 h-5 text-gray-500" />
                          <span className="text-gray-700">{office.hours}</span>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                <CardHeader>
                  <CardTitle className="text-xl text-white">Экстренная связь</CardTitle>
                  <CardDescription className="text-blue-100">
                    Круглосуточная поддержка для срочных вопросов
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Icon name="Phone" className="w-5 h-5 text-white" />
                    <span>+7 (495) 123-45-67 (24/7)</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="MessageCircle" className="w-5 h-5 text-white" />
                    <span>WhatsApp: +7 (495) 123-45-67</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="Send" className="w-5 h-5 text-white" />
                    <span>Telegram: @shadepro_support</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-blue-100 text-blue-800 border-blue-200">Часто задаваемые вопросы</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Ответы на популярные вопросы
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                question: "Как быстро вы можете приехать на объект?",
                answer: "В Москве и МО - в течение 24 часов. В регионах - 2-3 рабочих дня."
              },
              {
                question: "Сколько стоит выезд технолога?",
                answer: "Выезд технолога, замер и составление сметы - абсолютно бесплатно."
              },
              {
                question: "Какая гарантия на покрытия?",
                answer: "Гарантия от 5 до 20 лет в зависимости от типа покрытия и условий эксплуатации."
              },
              {
                question: "Работаете ли вы в выходные?",
                answer: "Да, мы работаем 7 дней в неделю. В выходные - по предварительной договоренности."
              },
              {
                question: "Можно ли посмотреть образцы покрытий?",
                answer: "Конечно! У нас есть выставочный зал с образцами всех видов покрытий."
              },
              {
                question: "Предоставляете ли рассрочку?",
                answer: "Да, мы работаем с рассрочкой до 12 месяцев и лизинговыми компаниями."
              }
            ].map((faq, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}