import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from '@/components/ui/icon';
import { useState } from 'react';

export default function Index() {
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
              <a href="#services" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">Услуги</a>
              <a href="#portfolio" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">Портфолио</a>
              <a href="#about" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">О нас</a>
              <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">Контакты</a>
            </nav>

            <div className="flex items-center space-x-4">
              <div className="hidden sm:block text-right">
                <p className="text-sm font-semibold text-gray-900">+7 (495) 123-45-67</p>
                <p className="text-xs text-gray-500">Звонок бесплатный</p>
              </div>
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                Заказать звонок
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-blue-100 text-blue-800 border-blue-200">
                  <Icon name="Award" className="w-4 h-4 mr-1" />
                  Лидер рынка с 2010 года
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Профессиональные{' '}
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    полимерные покрытия полов
                  </span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Создаем долговечные, красивые и функциональные полы для промышленных, 
                  коммерческих и жилых объектов. Гарантия качества до 20 лет.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg">
                  <Icon name="Calculator" className="w-5 h-5 mr-2" />
                  Рассчитать стоимость
                </Button>
                <Button size="lg" variant="outline" className="border-gray-300 hover:bg-gray-50">
                  <Icon name="Play" className="w-5 h-5 mr-2" />
                  Смотреть видео
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">1000+</div>
                  <div className="text-sm text-gray-600">Объектов</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">20 лет</div>
                  <div className="text-sm text-gray-600">Гарантия</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">24/7</div>
                  <div className="text-sm text-gray-600">Поддержка</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative">
                <img 
                  src="/img/ef3c4292-aa8f-4326-9b0f-2c4aecbfee15.jpg"
                  alt="Профессиональная укладка полимерных покрытий"
                  className="rounded-2xl shadow-2xl w-full"
                />
                <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center">
                      <Icon name="CheckCircle" className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Сертифицированные материалы</p>
                      <p className="text-sm text-gray-600">Только европейские бренды</p>
                    </div>
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
            <Badge className="bg-blue-100 text-blue-800 border-blue-200">Наши услуги</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Полный спектр работ по устройству полимерных полов
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              От консультации и проектирования до монтажа и послегарантийного обслуживания
            </p>
          </div>

          <Tabs defaultValue="epoxy" className="w-full">
            <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 mb-12 h-auto p-1">
              <TabsTrigger value="epoxy" className="p-4 data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-purple-600 data-[state=active]:text-white">
                <div className="text-center">
                  <Icon name="Shield" className="w-6 h-6 mx-auto mb-2" />
                  <div className="font-semibold">Эпоксидные</div>
                </div>
              </TabsTrigger>
              <TabsTrigger value="polyurethane" className="p-4 data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-purple-600 data-[state=active]:text-white">
                <div className="text-center">
                  <Icon name="Sparkles" className="w-6 h-6 mx-auto mb-2" />
                  <div className="font-semibold">Полиуретановые</div>
                </div>
              </TabsTrigger>
              <TabsTrigger value="leveling" className="p-4 data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-purple-600 data-[state=active]:text-white">
                <div className="text-center">
                  <Icon name="Layers" className="w-6 h-6 mx-auto mb-2" />
                  <div className="font-semibold">Наливные</div>
                </div>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="epoxy" className="space-y-8">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Эпоксидные покрытия</h3>
                    <p className="text-gray-600 text-lg mb-6">
                      Самые прочные и долговечные покрытия для промышленных и коммерческих объектов. 
                      Выдерживают высокие механические и химические нагрузки.
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <Icon name="Zap" className="w-6 h-6 text-blue-600 mb-2" />
                      <div className="font-semibold text-gray-900">Прочность</div>
                      <div className="text-sm text-gray-600">До 50 МПа</div>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <Icon name="Droplets" className="w-6 h-6 text-blue-600 mb-2" />
                      <div className="font-semibold text-gray-900">Химстойкость</div>
                      <div className="text-sm text-gray-600">pH 2-12</div>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <Icon name="Clock" className="w-6 h-6 text-blue-600 mb-2" />
                      <div className="font-semibold text-gray-900">Срок службы</div>
                      <div className="text-sm text-gray-600">15-20 лет</div>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <Icon name="Thermometer" className="w-6 h-6 text-blue-600 mb-2" />
                      <div className="font-semibold text-gray-900">Температура</div>
                      <div className="text-sm text-gray-600">-40°C до +120°C</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-blue-100">
                    <div>
                      <div className="text-2xl font-bold text-gray-900">от 1200 ₽/м²</div>
                      <div className="text-sm text-gray-600">включая материалы и работу</div>
                    </div>
                    <Button className="bg-gradient-to-r from-blue-600 to-purple-600">
                      Получить расчет
                    </Button>
                  </div>
                </div>
                <div>
                  <img 
                    src="/img/ef3c4292-aa8f-4326-9b0f-2c4aecbfee15.jpg"
                    alt="Эпоксидные покрытия"
                    className="rounded-2xl shadow-xl w-full"
                  />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="polyurethane" className="space-y-8">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Полиуретановые покрытия</h3>
                    <p className="text-gray-600 text-lg mb-6">
                      Эластичные покрытия с отличными декоративными свойствами. 
                      Идеально подходят для помещений с высокими требованиями к эстетике.
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <Icon name="Palette" className="w-6 h-6 text-blue-600 mb-2" />
                      <div className="font-semibold text-gray-900">Цвета</div>
                      <div className="text-sm text-gray-600">500+ оттенков</div>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <Icon name="Sun" className="w-6 h-6 text-blue-600 mb-2" />
                      <div className="font-semibold text-gray-900">УФ-стойкость</div>
                      <div className="text-sm text-gray-600">Не выгорает</div>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <Icon name="Waves" className="w-6 h-6 text-blue-600 mb-2" />
                      <div className="font-semibold text-gray-900">Эластичность</div>
                      <div className="text-sm text-gray-600">До 400%</div>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <Icon name="Volume2" className="w-6 h-6 text-blue-600 mb-2" />
                      <div className="font-semibold text-gray-900">Шумопоглощение</div>
                      <div className="text-sm text-gray-600">До 20 дБ</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-blue-100">
                    <div>
                      <div className="text-2xl font-bold text-gray-900">от 800 ₽/м²</div>
                      <div className="text-sm text-gray-600">включая материалы и работу</div>
                    </div>
                    <Button className="bg-gradient-to-r from-blue-600 to-purple-600">
                      Получить расчет
                    </Button>
                  </div>
                </div>
                <div>
                  <img 
                    src="/img/eefc34c5-1e9c-41de-9bf4-9fe681faa804.jpg"
                    alt="Полиуретановые покрытия"
                    className="rounded-2xl shadow-xl w-full"
                  />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="leveling" className="space-y-8">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Наливные полы</h3>
                    <p className="text-gray-600 text-lg mb-6">
                      Самовыравнивающиеся составы для создания идеально ровной поверхности. 
                      Быстрый монтаж и отличные гигиенические свойства.
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <Icon name="Gauge" className="w-6 h-6 text-blue-600 mb-2" />
                      <div className="font-semibold text-gray-900">Ровность</div>
                      <div className="text-sm text-gray-600">±1 мм на 2м</div>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <Icon name="Timer" className="w-6 h-6 text-blue-600 mb-2" />
                      <div className="font-semibold text-gray-900">Быстрота</div>
                      <div className="text-sm text-gray-600">3-5 дней</div>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <Icon name="Shield" className="w-6 h-6 text-blue-600 mb-2" />
                      <div className="font-semibold text-gray-900">Гигиена</div>
                      <div className="text-sm text-gray-600">Антибактериальные</div>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <Icon name="Zap" className="w-6 h-6 text-blue-600 mb-2" />
                      <div className="font-semibold text-gray-900">Толщина</div>
                      <div className="text-sm text-gray-600">3-15 мм</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-blue-100">
                    <div>
                      <div className="text-2xl font-bold text-gray-900">от 600 ₽/м²</div>
                      <div className="text-sm text-gray-600">включая материалы и работу</div>
                    </div>
                    <Button className="bg-gradient-to-r from-blue-600 to-purple-600">
                      Получить расчет
                    </Button>
                  </div>
                </div>
                <div>
                  <img 
                    src="/img/72f4b2bc-8448-4df2-bf59-959d09008849.jpg"
                    alt="Наливные полы"
                    className="rounded-2xl shadow-xl w-full"
                  />
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-blue-100 text-blue-800 border-blue-200">Наши работы</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Более 1000 реализованных проектов
            </h2>
            <p className="text-xl text-gray-600">
              От небольших офисов до крупных производственных комплексов
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: "Производственный цех",
                area: "2500 м²",
                type: "Эпоксидное покрытие",
                image: "/img/ef3c4292-aa8f-4326-9b0f-2c4aecbfee15.jpg",
                tags: ["Промышленность", "Антистатик"]
              },
              {
                title: "Торговый центр",
                area: "1200 м²",
                type: "Полиуретан с декором",
                image: "/img/eefc34c5-1e9c-41de-9bf4-9fe681faa804.jpg",
                tags: ["Коммерция", "Декоративный"]
              },
              {
                title: "Логистический центр",
                area: "5000 м²",
                type: "Промышленный эпоксид",
                image: "/img/72f4b2bc-8448-4df2-bf59-959d09008849.jpg",
                tags: ["Склад", "Высокие нагрузки"]
              }
            ].map((project, index) => (
              <Card key={index} className="group overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-white/90 text-gray-800">
                      {project.area}
                    </Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription>{project.type}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary" className="bg-blue-50 text-blue-700">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button variant="outline" size="lg" className="border-gray-300">
              Посмотреть все проекты
              <Icon name="ArrowRight" className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <Badge className="bg-blue-100 text-blue-800 border-blue-200 mb-4">О компании</Badge>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                  Лидер рынка полимерных покрытий в России
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Более 14 лет опыта в области устройства полимерных полов. 
                  Мы работаем только с сертифицированными европейскими материалами 
                  и предоставляем расширенную гарантию на все виды работ.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="CheckCircle" className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Собственное производство</h3>
                    <p className="text-gray-600">Контроль качества на всех этапах</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Award" className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Сертифицированные материалы</h3>
                    <p className="text-gray-600">Только европейские бренды премиум-класса</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Users" className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Команда профессионалов</h3>
                    <p className="text-gray-600">Более 50 сертифицированных специалистов</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6 pt-8 border-t border-gray-200">
                <div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">1000+</div>
                  <div className="text-gray-600">Объектов сдано</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">50</div>
                  <div className="text-gray-600">Специалистов в команде</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">14</div>
                  <div className="text-gray-600">Лет на рынке</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">99%</div>
                  <div className="text-gray-600">Довольных клиентов</div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img 
                  src="/img/ef3c4292-aa8f-4326-9b0f-2c4aecbfee15.jpg"
                  alt="Производственный процесс"
                  className="rounded-xl shadow-lg w-full h-48 object-cover"
                />
                <img 
                  src="/img/eefc34c5-1e9c-41de-9bf4-9fe681faa804.jpg"
                  alt="Готовый результат"
                  className="rounded-xl shadow-lg w-full h-64 object-cover"
                />
              </div>
              <div className="space-y-4 mt-8">
                <img 
                  src="/img/72f4b2bc-8448-4df2-bf59-959d09008849.jpg"
                  alt="Промышленные полы"
                  className="rounded-xl shadow-lg w-full h-64 object-cover"
                />
                <Card className="bg-gradient-to-br from-blue-600 to-purple-600 text-white">
                  <CardContent className="p-6 text-center">
                    <Icon name="Award" className="w-8 h-8 mx-auto mb-3 text-white" />
                    <h3 className="font-bold text-xl mb-2">ISO 9001</h3>
                    <p className="text-blue-100">Сертифицированная система менеджмента качества</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div>
                <Badge className="bg-white/20 text-white border-white/20 mb-4">Контакты</Badge>
                <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                  Получите бесплатную консультацию и расчет
                </h2>
                <p className="text-xl text-gray-300 mb-8">
                  Выезд технолога на объект, замер и составление сметы — бесплатно. 
                  Работаем по всей России.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                    <Icon name="Phone" className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Телефоны</h3>
                    <p className="text-gray-300">+7 (495) 123-45-67 (Москва)</p>
                    <p className="text-gray-300">+7 (800) 800-80-80 (Регионы)</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                    <Icon name="Mail" className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Email</h3>
                    <p className="text-gray-300">info@shade-pro.ru</p>
                    <p className="text-gray-300">sales@shade-pro.ru</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                    <Icon name="MapPin" className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Офис</h3>
                    <p className="text-gray-300">г. Москва, Варшавское шоссе, 42</p>
                    <p className="text-gray-300">БЦ "Оптима Плаза", 15 этаж</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                    <Icon name="Clock" className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Режим работы</h3>
                    <p className="text-gray-300">Пн-Пт: 8:00 - 20:00</p>
                    <p className="text-gray-300">Сб-Вс: 10:00 - 18:00</p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white text-2xl">Заказать консультацию</CardTitle>
                <CardDescription className="text-gray-300 text-lg">
                  Оставьте заявку и наш технолог свяжется с вами в течение 15 минут
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Имя *</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                      placeholder="Ваше имя"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Телефон *</label>
                    <input 
                      type="tel" 
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                      placeholder="+7 (___) ___-__-__"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Площадь объекта (м²)</label>
                  <input 
                    type="number" 
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                    placeholder="Например: 500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Комментарий</label>
                  <textarea 
                    rows={3}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none" 
                    placeholder="Опишите ваш проект..."
                  />
                </div>

                <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 text-lg">
                  <Icon name="Send" className="w-5 h-5 mr-2" />
                  Получить консультацию
                </Button>

                <p className="text-xs text-gray-400 text-center">
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <Icon name="Layers" className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">ShadePro</h3>
                  <p className="text-xs text-gray-400">Полимерные покрытия</p>
                </div>
              </div>
              <p className="text-gray-400">
                Профессиональные полимерные покрытия полов с гарантией качества до 20 лет.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Услуги</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Эпоксидные покрытия</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Полиуретановые покрытия</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Наливные полы</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Подготовка основания</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Компания</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Портфолио</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Сертификаты</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Вакансии</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Контакты</h4>
              <div className="space-y-3 text-gray-400">
                <div className="flex items-center space-x-2">
                  <Icon name="Phone" className="w-4 h-4" />
                  <span>+7 (495) 123-45-67</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Mail" className="w-4 h-4" />
                  <span>info@shade-pro.ru</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="MapPin" className="w-4 h-4" />
                  <span>г. Москва, Варшавское шоссе, 42</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between">
            <p className="text-gray-400 text-sm">
              &copy; 2024 ShadePro. Все права защищены.
            </p>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                Политика конфиденциальности
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                Пользовательское соглашение
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}