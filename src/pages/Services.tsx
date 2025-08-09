import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from '@/components/ui/icon';

export default function Services() {
  const services = [
    {
      title: "Эпоксидные покрытия",
      description: "Высокопрочные покрытия для промышленных объектов",
      price: "от 1200 ₽/м²",
      features: ["Химическая стойкость", "Износостойкость", "Антистатические свойства"],
      icon: "Shield"
    },
    {
      title: "Полиуретановые покрытия",
      description: "Эластичные покрытия с декоративными свойствами",
      price: "от 800 ₽/м²",
      features: ["Эластичность", "УФ-стойкость", "Широкая цветовая гамма"],
      icon: "Sparkles"
    },
    {
      title: "Наливные полы",
      description: "Самовыравнивающиеся составы для идеальной поверхности",
      price: "от 600 ₽/м²",
      features: ["Быстрый монтаж", "Идеальная ровность", "Гигиеничность"],
      icon: "Layers"
    },
    {
      title: "Подготовка основания",
      description: "Профессиональная подготовка поверхности",
      price: "от 300 ₽/м²",
      features: ["Шлифовка", "Грунтование", "Ремонт трещин"],
      icon: "Settings"
    },
    {
      title: "Декоративные покрытия",
      description: "Художественные и дизайнерские решения",
      price: "от 1500 ₽/м²",
      features: ["3D эффекты", "Металлик", "Флоки и чипсы"],
      icon: "Palette"
    },
    {
      title: "Антистатические покрытия",
      description: "Специальные покрытия для электронной промышленности",
      price: "от 1800 ₽/м²",
      features: ["Токопроводящие", "Антистатические", "Сертифицированные"],
      icon: "Zap"
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
              <a href="/services" className="text-blue-600 font-medium">Услуги</a>
              <a href="/portfolio" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">Портфолио</a>
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
            <Badge className="bg-blue-100 text-blue-800 border-blue-200">Наши услуги</Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900">
              Полный спектр услуг по устройству{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                полимерных полов
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              От консультации и проектирования до монтажа и послегарантийного обслуживания. 
              Работаем с объектами любой сложности.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-blue-200">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon name={service.icon as any} className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                  <CardDescription className="text-lg">{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <Icon name="CheckCircle" className="w-5 h-5 text-green-600" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t">
                    <div className="text-2xl font-bold text-blue-600">{service.price}</div>
                    <Button className="bg-gradient-to-r from-blue-600 to-purple-600">
                      Подробнее
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-blue-100 text-blue-800 border-blue-200">Процесс работы</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Как мы работаем
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Консультация", description: "Бесплатная консультация и выезд технолога" },
              { step: "02", title: "Проект", description: "Разработка технического решения и сметы" },
              { step: "03", title: "Монтаж", description: "Профессиональное выполнение работ" },
              { step: "04", title: "Гарантия", description: "Гарантийное и послегарантийное обслуживание" }
            ].map((item, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl font-bold text-white">{item.step}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Готовы начать проект?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Получите бесплатную консультацию и расчет стоимости для вашего объекта
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              <Icon name="Calculator" className="w-5 h-5 mr-2" />
              Рассчитать стоимость
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              <Icon name="Phone" className="w-5 h-5 mr-2" />
              Заказать звонок
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}