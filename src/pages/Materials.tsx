import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from '@/components/ui/icon';

export default function Materials() {
  const materials = [
    {
      category: "epoxy",
      name: "Эпоксидные смолы",
      brands: [
        {
          name: "Sika",
          country: "Швейцария",
          products: ["SikaFloor-161", "SikaFloor-264", "SikaFloor-381"],
          features: ["Высокая прочность", "Химическая стойкость", "Быстрое отверждение"],
          image: "/img/ef3c4292-aa8f-4326-9b0f-2c4aecbfee15.jpg"
        },
        {
          name: "BASF",
          country: "Германия", 
          products: ["Ucrete MF", "Ucrete DP", "Ucrete HF"],
          features: ["Термостойкость", "Гигиеничность", "Долговечность"],
          image: "/img/eefc34c5-1e9c-41de-9bf4-9fe681faa804.jpg"
        },
        {
          name: "Mapei",
          country: "Италия",
          products: ["Mapefloor I 300 SL", "Mapefloor I 500 W", "Mapefloor CPU/MF"],
          features: ["Экологичность", "Декоративность", "Простота нанесения"],
          image: "/img/72f4b2bc-8448-4df2-bf59-959d09008849.jpg"
        }
      ]
    },
    {
      category: "polyurethane",
      name: "Полиуретановые системы",
      brands: [
        {
          name: "Tikkurila",
          country: "Финляндия",
          products: ["Temadur 90", "Temadur 50", "Temadur HB"],
          features: ["УФ-стойкость", "Эластичность", "Цветостойкость"],
          image: "/img/3af2a4ee-f64a-49a2-bf27-ce7fe23c5731.jpg"
        },
        {
          name: "Teknos",
          country: "Финляндия",
          products: ["Teknofloor 1400", "Teknofloor 1500", "Teknofloor 2K"],
          features: ["Износостойкость", "Антискольжение", "Быстрое высыхание"],
          image: "/img/ef3c4292-aa8f-4326-9b0f-2c4aecbfee15.jpg"
        }
      ]
    },
    {
      category: "leveling",
      name: "Наливные составы",
      brands: [
        {
          name: "Knauf",
          country: "Германия",
          products: ["Boden 15", "Boden 25", "Boden Nivelliermasse"],
          features: ["Самовыравнивание", "Быстрое схватывание", "Высокая текучесть"],
          image: "/img/eefc34c5-1e9c-41de-9bf4-9fe681faa804.jpg"
        },
        {
          name: "Weber",
          country: "Франция",
          products: ["Weber.vetonit 3000", "Weber.vetonit 4000", "Weber.vetonit 5000"],
          features: ["Армированные волокнами", "Низкая усадка", "Высокая прочность"],
          image: "/img/72f4b2bc-8448-4df2-bf59-959d09008849.jpg"
        }
      ]
    }
  ];

  const certifications = [
    {
      name: "ISO 9001:2015",
      description: "Система менеджмента качества",
      icon: "Award"
    },
    {
      name: "ISO 14001:2015", 
      description: "Экологический менеджмент",
      icon: "Leaf"
    },
    {
      name: "CE Marking",
      description: "Европейское соответствие",
      icon: "CheckCircle"
    },
    {
      name: "ГОСТ Р",
      description: "Российские стандарты качества",
      icon: "Shield"
    }
  ];

  const advantages = [
    {
      title: "Только оригинальные материалы",
      description: "Прямые поставки от европейских производителей",
      icon: "Truck"
    },
    {
      title: "Полный цикл контроля",
      description: "От закупки до нанесения на объекте",
      icon: "Search"
    },
    {
      title: "Складские запасы",
      description: "Всегда в наличии популярные позиции",
      icon: "Package"
    },
    {
      title: "Техническая поддержка",
      description: "Консультации по применению материалов",
      icon: "Headphones"
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
              <a href="/materials" className="text-blue-600 font-medium">Материалы</a>
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
            <Badge className="bg-blue-100 text-blue-800 border-blue-200">Материалы</Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900">
              Только{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                сертифицированные материалы
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Работаем исключительно с ведущими европейскими производителями. 
              Все материалы имеют необходимые сертификаты и гарантии качества.
            </p>
          </div>
        </div>
      </section>

      {/* Materials Tabs */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="epoxy" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-12 h-auto p-1">
              {materials.map((category) => (
                <TabsTrigger 
                  key={category.category} 
                  value={category.category}
                  className="p-4 data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-purple-600 data-[state=active]:text-white"
                >
                  <div className="text-center">
                    <div className="font-semibold">{category.name}</div>
                    <div className="text-sm opacity-70">({category.brands.length} брендов)</div>
                  </div>
                </TabsTrigger>
              ))}
            </TabsList>

            {materials.map((category) => (
              <TabsContent key={category.category} value={category.category}>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {category.brands.map((brand, index) => (
                    <Card key={index} className="group hover:shadow-xl transition-all duration-300">
                      <div className="relative overflow-hidden">
                        <img 
                          src={brand.image}
                          alt={brand.name}
                          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute top-4 right-4">
                          <Badge className="bg-white/90 text-gray-800">
                            {brand.country}
                          </Badge>
                        </div>
                      </div>
                      <CardHeader>
                        <CardTitle className="text-2xl">{brand.name}</CardTitle>
                        <CardDescription className="text-lg">
                          Производитель: {brand.country}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3">Основные продукты:</h4>
                          <div className="space-y-2">
                            {brand.products.map((product, productIndex) => (
                              <div key={productIndex} className="flex items-center space-x-2">
                                <Icon name="CheckCircle" className="w-4 h-4 text-green-600" />
                                <span className="text-gray-700">{product}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3">Ключевые особенности:</h4>
                          <div className="flex flex-wrap gap-2">
                            {brand.features.map((feature, featureIndex) => (
                              <Badge key={featureIndex} variant="secondary" className="bg-blue-50 text-blue-700">
                                {feature}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600">
                          Подробнее о материалах
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

      {/* Certifications */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-blue-100 text-blue-800 border-blue-200">Сертификация</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Международные стандарты качества
            </h2>
            <p className="text-xl text-gray-600">
              Все материалы соответствуют строгим международным стандартам
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {certifications.map((cert, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon name={cert.icon as any} className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">{cert.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{cert.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-blue-100 text-blue-800 border-blue-200">Наши преимущества</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Почему выбирают наши материалы
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

      {/* Technical Support */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="bg-white/20 text-white border-white/20">Техническая поддержка</Badge>
              <h2 className="text-3xl lg:text-4xl font-bold">
                Помощь в выборе материалов
              </h2>
              <p className="text-xl text-blue-100">
                Наши технологи помогут подобрать оптимальные материалы 
                для вашего проекта с учетом всех требований и условий эксплуатации.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Icon name="CheckCircle" className="w-6 h-6 text-white" />
                  <span>Анализ условий эксплуатации</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="CheckCircle" className="w-6 h-6 text-white" />
                  <span>Подбор оптимальной системы</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="CheckCircle" className="w-6 h-6 text-white" />
                  <span>Расчет расхода материалов</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="CheckCircle" className="w-6 h-6 text-white" />
                  <span>Техническое сопровождение</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                  <Icon name="Phone" className="w-5 h-5 mr-2" />
                  Получить консультацию
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                  <Icon name="Download" className="w-5 h-5 mr-2" />
                  Скачать каталог
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <Card className="bg-white/10 border-white/20 backdrop-blur-sm text-white">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold mb-2">50+</div>
                    <div className="text-blue-100">Видов материалов</div>
                  </CardContent>
                </Card>
                <Card className="bg-white/10 border-white/20 backdrop-blur-sm text-white">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold mb-2">15</div>
                    <div className="text-blue-100">Лет опыта</div>
                  </CardContent>
                </Card>
              </div>
              <div className="space-y-4 mt-8">
                <Card className="bg-white/10 border-white/20 backdrop-blur-sm text-white">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold mb-2">10</div>
                    <div className="text-blue-100">Европейских брендов</div>
                  </CardContent>
                </Card>
                <Card className="bg-white/10 border-white/20 backdrop-blur-sm text-white">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold mb-2">24/7</div>
                    <div className="text-blue-100">Техподдержка</div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}