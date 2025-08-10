import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from '@/components/ui/icon';

export default function Certificates() {
  const certificates = [
    {
      category: "quality",
      name: "Сертификаты качества",
      items: [
        {
          title: "ISO 9001:2015",
          description: "Система менеджмента качества",
          issuer: "TÜV NORD",
          validUntil: "2026",
          image: "/img/ef3c4292-aa8f-4326-9b0f-2c4aecbfee15.jpg",
          scope: "Проектирование, производство и монтаж полимерных покрытий"
        },
        {
          title: "ISO 14001:2015",
          description: "Экологический менеджмент",
          issuer: "Bureau Veritas",
          validUntil: "2025",
          image: "/img/eefc34c5-1e9c-41de-9bf4-9fe681faa804.jpg",
          scope: "Экологически безопасное производство"
        },
        {
          title: "ISO 45001:2018",
          description: "Охрана труда и промышленная безопасность",
          issuer: "SGS",
          validUntil: "2026",
          image: "/img/72f4b2bc-8448-4df2-bf59-959d09008849.jpg",
          scope: "Безопасность производственных процессов"
        }
      ]
    },
    {
      category: "products",
      name: "Сертификаты продукции",
      items: [
        {
          title: "Сертификат соответствия ГОСТ Р",
          description: "Полимерные покрытия для промышленных полов",
          issuer: "Росстандарт",
          validUntil: "2025",
          image: "/img/3af2a4ee-f64a-49a2-bf27-ce7fe23c5731.jpg",
          scope: "ГОСТ Р 56926-2016"
        },
        {
          title: "Техническое свидетельство",
          description: "Эпоксидные наливные полы",
          issuer: "ФГУП НИЦ «Строительство»",
          validUntil: "2026",
          image: "/img/ef3c4292-aa8f-4326-9b0f-2c4aecbfee15.jpg",
          scope: "ТС RU C-RU.НА52.В.00565/20"
        },
        {
          title: "Пожарный сертификат",
          description: "Класс пожарной опасности КМ1",
          issuer: "ВНИИПО МЧС России",
          validUntil: "2025",
          image: "/img/eefc34c5-1e9c-41de-9bf4-9fe681faa804.jpg",
          scope: "Сертификат пожарной безопасности"
        }
      ]
    },
    {
      category: "personnel",
      name: "Квалификация персонала",
      items: [
        {
          title: "Аттестация сварщиков",
          description: "НАКС - Национальное агентство контроля сварки",
          issuer: "НАКС",
          validUntil: "2025",
          image: "/img/72f4b2bc-8448-4df2-bf59-959d09008849.jpg",
          scope: "Сварка металлоконструкций"
        },
        {
          title: "Допуск СРО",
          description: "Строительно-монтажные работы",
          issuer: "СРО «Объединение строителей»",
          validUntil: "2026",
          image: "/img/3af2a4ee-f64a-49a2-bf27-ce7fe23c5731.jpg",
          scope: "Устройство полов"
        },
        {
          title: "Обучение по охране труда",
          description: "Повышение квалификации специалистов",
          issuer: "Учебный центр «Прогресс»",
          validUntil: "2025",
          image: "/img/ef3c4292-aa8f-4326-9b0f-2c4aecbfee15.jpg",
          scope: "40 часов обучения"
        }
      ]
    }
  ];

  const advantages = [
    {
      title: "Международные стандарты",
      description: "Соответствие требованиям ISO и европейским нормам",
      icon: "Globe"
    },
    {
      title: "Регулярные аудиты",
      description: "Ежегодная проверка систем качества",
      icon: "Search"
    },
    {
      title: "Обученный персонал",
      description: "Все специалисты имеют необходимые допуски",
      icon: "GraduationCap"
    },
    {
      title: "Документооборот",
      description: "Полная документация по каждому проекту",
      icon: "FileText"
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
              <a href="/certificates" className="text-blue-600 font-medium">Сертификаты</a>
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
            <Badge className="bg-blue-100 text-blue-800 border-blue-200">Сертификаты</Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900">
              Сертификаты и{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                лицензии качества
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Все наши процессы сертифицированы по международным стандартам. 
              Гарантируем высочайшее качество работ и материалов.
            </p>
          </div>
        </div>
      </section>

      {/* Certificates Tabs */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="quality" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-12 h-auto p-1">
              {certificates.map((category) => (
                <TabsTrigger 
                  key={category.category} 
                  value={category.category}
                  className="p-4 data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-purple-600 data-[state=active]:text-white"
                >
                  <div className="text-center">
                    <div className="font-semibold">{category.name}</div>
                    <div className="text-sm opacity-70">({category.items.length})</div>
                  </div>
                </TabsTrigger>
              ))}
            </TabsList>

            {certificates.map((category) => (
              <TabsContent key={category.category} value={category.category}>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {category.items.map((cert, index) => (
                    <Card key={index} className="group hover:shadow-xl transition-all duration-300">
                      <div className="relative overflow-hidden">
                        <img 
                          src={cert.image}
                          alt={cert.title}
                          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute top-4 right-4">
                          <Badge className="bg-green-600 text-white">
                            до {cert.validUntil}
                          </Badge>
                        </div>
                      </div>
                      <CardHeader>
                        <CardTitle className="text-xl">{cert.title}</CardTitle>
                        <CardDescription className="text-lg">
                          {cert.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="space-y-2">
                          <div className="flex items-center space-x-2">
                            <Icon name="Building" className="w-4 h-4 text-gray-500" />
                            <span className="text-sm text-gray-600">Выдан: {cert.issuer}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Icon name="Calendar" className="w-4 h-4 text-gray-500" />
                            <span className="text-sm text-gray-600">Действует до: {cert.validUntil}</span>
                          </div>
                          <div className="flex items-start space-x-2">
                            <Icon name="FileText" className="w-4 h-4 text-gray-500 mt-0.5" />
                            <span className="text-sm text-gray-600">{cert.scope}</span>
                          </div>
                        </div>
                        <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600">
                          <Icon name="Download" className="w-4 h-4 mr-2" />
                          Скачать сертификат
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-blue-100 text-blue-800 border-blue-200">Преимущества</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Почему важны сертификаты
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon name={advantage.icon as any} className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">{advantage.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{advantage.description}</p>
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
            Работайте с сертифицированной компанией
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Все наши сертификаты подтверждают высокое качество работ и соответствие международным стандартам
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              <Icon name="Download" className="w-5 h-5 mr-2" />
              Скачать все сертификаты
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              <Icon name="Phone" className="w-5 h-5 mr-2" />
              Получить консультацию
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}