import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from '@/components/ui/icon';

export default function Technologies() {
  const technologies = [
    {
      id: "preparation",
      name: "Подготовка основания",
      description: "Современные методы подготовки поверхности",
      icon: "Settings",
      methods: [
        {
          name: "Алмазная шлифовка",
          description: "Механическая обработка поверхности алмазными дисками",
          advantages: ["Высокое качество", "Равномерность", "Отсутствие пыли"],
          equipment: "Шлифовальные машины Husqvarna, HTC",
          image: "/img/ef3c4292-aa8f-4326-9b0f-2c4aecbfee15.jpg"
        },
        {
          name: "Дробеструйная обработка",
          description: "Очистка и придание шероховатости металлической дробью",
          advantages: ["Быстрота", "Эффективность", "Экологичность"],
          equipment: "Дробеструйные установки Blastrac",
          image: "/img/eefc34c5-1e9c-41de-9bf4-9fe681faa804.jpg"
        },
        {
          name: "Фрезерование",
          description: "Удаление старых покрытий и неровностей",
          advantages: ["Точность", "Производительность", "Универсальность"],
          equipment: "Фрезеровальные машины Schwamborn",
          image: "/img/72f4b2bc-8448-4df2-bf59-959d09008849.jpg"
        }
      ]
    },
    {
      id: "application",
      name: "Нанесение покрытий",
      description: "Профессиональные технологии укладки",
      icon: "Brush",
      methods: [
        {
          name: "Безвоздушное распыление",
          description: "Равномерное нанесение материала под высоким давлением",
          advantages: ["Скорость", "Качество", "Экономия материала"],
          equipment: "Окрасочные агрегаты Graco, Wagner",
          image: "/img/3af2a4ee-f64a-49a2-bf27-ce7fe23c5731.jpg"
        },
        {
          name: "Наливная технология",
          description: "Самовыравнивающиеся составы для идеальной поверхности",
          advantages: ["Ровность", "Быстрота", "Минимум швов"],
          equipment: "Смесительные насосы PFT, M-Tec",
          image: "/img/ef3c4292-aa8f-4326-9b0f-2c4aecbfee15.jpg"
        },
        {
          name: "Ракельное нанесение",
          description: "Точное дозирование толщины покрытия",
          advantages: ["Контроль толщины", "Равномерность", "Качество"],
          equipment: "Профессиональные ракели и гладилки",
          image: "/img/eefc34c5-1e9c-41de-9bf4-9fe681faa804.jpg"
        }
      ]
    },
    {
      id: "control",
      name: "Контроль качества",
      description: "Современные методы контроля и испытаний",
      icon: "Search",
      methods: [
        {
          name: "Адгезиометрия",
          description: "Измерение прочности сцепления покрытия с основанием",
          advantages: ["Точность", "Надежность", "Стандартизация"],
          equipment: "Адгезиометры PosiTest AT, DeFelsko",
          image: "/img/72f4b2bc-8448-4df2-bf59-959d09008849.jpg"
        },
        {
          name: "Толщинометрия",
          description: "Контроль толщины нанесенного покрытия",
          advantages: ["Быстрота", "Неразрушающий контроль", "Высокая точность"],
          equipment: "Толщиномеры PosiTector, ElektroPhysik",
          image: "/img/3af2a4ee-f64a-49a2-bf27-ce7fe23c5731.jpg"
        },
        {
          name: "Испытания на прочность",
          description: "Определение механических характеристик покрытия",
          advantages: ["Достоверность", "Соответствие ГОСТ", "Документирование"],
          equipment: "Склерометры, маятниковые приборы",
          image: "/img/ef3c4292-aa8f-4326-9b0f-2c4aecbfee15.jpg"
        }
      ]
    }
  ];

  const innovations = [
    {
      title: "3D-моделирование",
      description: "Создание точных 3D-моделей объектов для планирования работ",
      icon: "Cube",
      benefits: ["Точное планирование", "Визуализация результата", "Оптимизация процессов"]
    },
    {
      title: "IoT-мониторинг",
      description: "Контроль условий твердения покрытий в режиме реального времени",
      icon: "Wifi",
      benefits: ["Контроль температуры", "Мониторинг влажности", "Уведомления о готовности"]
    },
    {
      title: "Лазерное нивелирование",
      description: "Высокоточное выравнивание поверхности с помощью лазерных систем",
      icon: "Target",
      benefits: ["Идеальная ровность", "Экономия времени", "Минимум отходов"]
    },
    {
      title: "Роботизированное нанесение",
      description: "Автоматизированные системы для больших площадей",
      icon: "Bot",
      benefits: ["Высокая скорость", "Равномерность", "Снижение затрат"]
    }
  ];

  const equipment = [
    {
      category: "Подготовка поверхности",
      items: [
        "Шлифовальные машины Husqvarna PG 820",
        "Дробеструйные установки Blastrac 1-15D",
        "Фрезеровальные машины Schwamborn BEF 324",
        "Пылесосы промышленные Nilfisk CFM"
      ]
    },
    {
      category: "Нанесение материалов",
      items: [
        "Окрасочные агрегаты Graco Mark X",
        "Смесительные насосы PFT G5C",
        "Растворонасосы M-Tec DUO-MIX",
        "Гладилки и ракели профессиональные"
      ]
    },
    {
      category: "Контроль качества",
      items: [
        "Адгезиометры PosiTest AT-M",
        "Толщиномеры PosiTector 6000",
        "Склерометры Schmidt N-34",
        "Влагомеры Tramex CME4"
      ]
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
              <a href="/technologies" className="text-blue-600 font-medium">Технологии</a>
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
            <Badge className="bg-blue-100 text-blue-800 border-blue-200">Технологии</Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900">
              Передовые{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                технологии укладки
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Используем самое современное оборудование и инновационные методы 
              для создания идеальных полимерных покрытий.
            </p>
          </div>
        </div>
      </section>

      {/* Technologies Tabs */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="preparation" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-12 h-auto p-1">
              {technologies.map((tech) => (
                <TabsTrigger 
                  key={tech.id} 
                  value={tech.id}
                  className="p-4 data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-purple-600 data-[state=active]:text-white"
                >
                  <div className="text-center">
                    <Icon name={tech.icon as any} className="w-6 h-6 mx-auto mb-2" />
                    <div className="font-semibold">{tech.name}</div>
                    <div className="text-sm opacity-70">{tech.description}</div>
                  </div>
                </TabsTrigger>
              ))}
            </TabsList>

            {technologies.map((tech) => (
              <TabsContent key={tech.id} value={tech.id}>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {tech.methods.map((method, index) => (
                    <Card key={index} className="group hover:shadow-xl transition-all duration-300">
                      <div className="relative overflow-hidden">
                        <img 
                          src={method.image}
                          alt={method.name}
                          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                        <div className="absolute bottom-4 left-4 text-white">
                          <h3 className="text-xl font-bold">{method.name}</h3>
                        </div>
                      </div>
                      <CardHeader>
                        <CardDescription className="text-lg">
                          {method.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3">Преимущества:</h4>
                          <div className="space-y-2">
                            {method.advantages.map((advantage, advIndex) => (
                              <div key={advIndex} className="flex items-center space-x-2">
                                <Icon name="CheckCircle" className="w-4 h-4 text-green-600" />
                                <span className="text-gray-700">{advantage}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Оборудование:</h4>
                          <p className="text-gray-600">{method.equipment}</p>
                        </div>

                        <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600">
                          Подробнее о технологии
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

      {/* Innovations */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-blue-100 text-blue-800 border-blue-200">Инновации</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Технологии будущего уже сегодня
            </h2>
            <p className="text-xl text-gray-600">
              Внедряем самые передовые решения для повышения качества и скорости работ
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {innovations.map((innovation, index) => (
              <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 group">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Icon name={innovation.icon as any} className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">{innovation.title}</CardTitle>
                  <CardDescription className="text-lg">{innovation.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {innovation.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center space-x-2 text-sm">
                        <Icon name="CheckCircle" className="w-4 h-4 text-green-600" />
                        <span className="text-gray-700">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-blue-100 text-blue-800 border-blue-200">Оборудование</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Профессиональное оборудование
            </h2>
            <p className="text-xl text-gray-600">
              Работаем только на сертифицированном оборудовании ведущих мировых производителей
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {equipment.map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl text-center">{category.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {category.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-start space-x-3">
                        <Icon name="Tool" className="w-5 h-5 text-blue-600 mt-0.5" />
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-blue-100 text-blue-800 border-blue-200">Процесс работы</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Технологический процесс
            </h2>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-600 to-purple-600"></div>
            
            <div className="space-y-12">
              {[
                {
                  step: "01",
                  title: "Обследование объекта",
                  description: "Анализ состояния основания, замеры, определение технологии",
                  duration: "1-2 дня"
                },
                {
                  step: "02", 
                  title: "Подготовка поверхности",
                  description: "Механическая обработка, очистка, ремонт дефектов",
                  duration: "2-5 дней"
                },
                {
                  step: "03",
                  title: "Грунтование",
                  description: "Нанесение грунтовочных составов для улучшения адгезии",
                  duration: "1 день"
                },
                {
                  step: "04",
                  title: "Нанесение покрытия",
                  description: "Укладка основного слоя полимерного покрытия",
                  duration: "2-3 дня"
                },
                {
                  step: "05",
                  title: "Финишная обработка",
                  description: "Нанесение защитных и декоративных слоев",
                  duration: "1-2 дня"
                },
                {
                  step: "06",
                  title: "Контроль качества",
                  description: "Испытания покрытия, составление протоколов",
                  duration: "1 день"
                }
              ].map((phase, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <Card className="hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <Badge className="bg-blue-100 text-blue-800">{phase.step}</Badge>
                          <Badge variant="secondary">{phase.duration}</Badge>
                        </div>
                        <CardTitle className="text-xl">{phase.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600">{phase.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div className="relative z-10">
                    <div className="w-4 h-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full border-4 border-white shadow-lg"></div>
                  </div>
                  
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Хотите увидеть технологии в действии?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Приглашаем на экскурсию по нашему производству и демонстрацию оборудования
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              <Icon name="Calendar" className="w-5 h-5 mr-2" />
              Записаться на экскурсию
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              <Icon name="Play" className="w-5 h-5 mr-2" />
              Смотреть видео
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}