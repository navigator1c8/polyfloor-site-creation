import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from '@/components/ui/icon';

export default function Portfolio() {
  const projects = [
    {
      id: 1,
      title: "Производственный цех АвтоВАЗ",
      category: "industrial",
      area: "5000 м²",
      type: "Эпоксидное покрытие",
      image: "/img/ef3c4292-aa8f-4326-9b0f-2c4aecbfee15.jpg",
      tags: ["Промышленность", "Антистатик", "Химстойкость"],
      description: "Устройство промышленного эпоксидного покрытия с антистатическими свойствами",
      year: "2024"
    },
    {
      id: 2,
      title: "ТЦ Европейский",
      category: "commercial",
      area: "2500 м²",
      type: "Полиуретан декоративный",
      image: "/img/eefc34c5-1e9c-41de-9bf4-9fe681faa804.jpg",
      tags: ["Коммерция", "Декоративный", "Износостойкость"],
      description: "Декоративное полиуретановое покрытие с металлик-эффектом",
      year: "2024"
    },
    {
      id: 3,
      title: "Логистический центр Wildberries",
      category: "industrial",
      area: "8000 м²",
      type: "Промышленный эпоксид",
      image: "/img/72f4b2bc-8448-4df2-bf59-959d09008849.jpg",
      tags: ["Склад", "Высокие нагрузки", "Быстрый монтаж"],
      description: "Высокопрочное покрытие для складского комплекса",
      year: "2023"
    },
    {
      id: 4,
      title: "Частный дом в Подмосковье",
      category: "residential",
      area: "150 м²",
      type: "Наливной пол 3D",
      image: "/img/3af2a4ee-f64a-49a2-bf27-ce7fe23c5731.jpg",
      tags: ["Жилой", "3D эффект", "Дизайнерский"],
      description: "Декоративный наливной пол с 3D эффектом океана",
      year: "2024"
    },
    {
      id: 5,
      title: "Медицинский центр",
      category: "commercial",
      area: "800 м²",
      type: "Антибактериальное покрытие",
      image: "/img/ef3c4292-aa8f-4326-9b0f-2c4aecbfee15.jpg",
      tags: ["Медицина", "Антибактериальный", "Гигиена"],
      description: "Специальное покрытие для медицинских учреждений",
      year: "2023"
    },
    {
      id: 6,
      title: "Спортивный комплекс",
      category: "commercial",
      area: "1200 м²",
      type: "Спортивное покрытие",
      image: "/img/eefc34c5-1e9c-41de-9bf4-9fe681faa804.jpg",
      tags: ["Спорт", "Амортизация", "Безопасность"],
      description: "Специализированное покрытие для спортивных залов",
      year: "2024"
    }
  ];

  const categories = [
    { id: "all", name: "Все проекты", count: projects.length },
    { id: "industrial", name: "Промышленные", count: projects.filter(p => p.category === "industrial").length },
    { id: "commercial", name: "Коммерческие", count: projects.filter(p => p.category === "commercial").length },
    { id: "residential", name: "Жилые", count: projects.filter(p => p.category === "residential").length }
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
              <a href="/portfolio" className="text-blue-600 font-medium">Портфолио</a>
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
            <Badge className="bg-blue-100 text-blue-800 border-blue-200">Наши работы</Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900">
              Портфолио{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                реализованных проектов
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Более 1000 успешно завершенных проектов по всей России. 
              От небольших офисов до крупных промышленных комплексов.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-12 h-auto p-1">
              {categories.map((category) => (
                <TabsTrigger 
                  key={category.id} 
                  value={category.id} 
                  className="p-4 data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-purple-600 data-[state=active]:text-white"
                >
                  <div className="text-center">
                    <div className="font-semibold">{category.name}</div>
                    <div className="text-sm opacity-70">({category.count})</div>
                  </div>
                </TabsTrigger>
              ))}
            </TabsList>

            <TabsContent value="all">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project) => (
                  <Card key={project.id} className="group overflow-hidden hover:shadow-xl transition-all duration-300">
                    <div className="relative overflow-hidden">
                      <img 
                        src={project.image}
                        alt={project.title}
                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-white/90 text-gray-800">
                          {project.year}
                        </Badge>
                      </div>
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-blue-600 text-white">
                          {project.area}
                        </Badge>
                      </div>
                    </div>
                    <CardHeader>
                      <CardTitle className="text-xl">{project.title}</CardTitle>
                      <CardDescription className="text-lg">{project.type}</CardDescription>
                      <p className="text-gray-600">{project.description}</p>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag, tagIndex) => (
                          <Badge key={tagIndex} variant="secondary" className="bg-blue-50 text-blue-700">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600">
                        Подробнее о проекте
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="industrial">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.filter(p => p.category === "industrial").map((project) => (
                  <Card key={project.id} className="group overflow-hidden hover:shadow-xl transition-all duration-300">
                    <div className="relative overflow-hidden">
                      <img 
                        src={project.image}
                        alt={project.title}
                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-white/90 text-gray-800">
                          {project.year}
                        </Badge>
                      </div>
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-blue-600 text-white">
                          {project.area}
                        </Badge>
                      </div>
                    </div>
                    <CardHeader>
                      <CardTitle className="text-xl">{project.title}</CardTitle>
                      <CardDescription className="text-lg">{project.type}</CardDescription>
                      <p className="text-gray-600">{project.description}</p>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag, tagIndex) => (
                          <Badge key={tagIndex} variant="secondary" className="bg-blue-50 text-blue-700">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600">
                        Подробнее о проекте
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="commercial">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.filter(p => p.category === "commercial").map((project) => (
                  <Card key={project.id} className="group overflow-hidden hover:shadow-xl transition-all duration-300">
                    <div className="relative overflow-hidden">
                      <img 
                        src={project.image}
                        alt={project.title}
                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-white/90 text-gray-800">
                          {project.year}
                        </Badge>
                      </div>
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-blue-600 text-white">
                          {project.area}
                        </Badge>
                      </div>
                    </div>
                    <CardHeader>
                      <CardTitle className="text-xl">{project.title}</CardTitle>
                      <CardDescription className="text-lg">{project.type}</CardDescription>
                      <p className="text-gray-600">{project.description}</p>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag, tagIndex) => (
                          <Badge key={tagIndex} variant="secondary" className="bg-blue-50 text-blue-700">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600">
                        Подробнее о проекте
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="residential">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.filter(p => p.category === "residential").map((project) => (
                  <Card key={project.id} className="group overflow-hidden hover:shadow-xl transition-all duration-300">
                    <div className="relative overflow-hidden">
                      <img 
                        src={project.image}
                        alt={project.title}
                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-white/90 text-gray-800">
                          {project.year}
                        </Badge>
                      </div>
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-blue-600 text-white">
                          {project.area}
                        </Badge>
                      </div>
                    </div>
                    <CardHeader>
                      <CardTitle className="text-xl">{project.title}</CardTitle>
                      <CardDescription className="text-lg">{project.type}</CardDescription>
                      <p className="text-gray-600">{project.description}</p>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag, tagIndex) => (
                          <Badge key={tagIndex} variant="secondary" className="bg-blue-50 text-blue-700">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600">
                        Подробнее о проекте
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">1000+</div>
              <div className="text-gray-600">Завершенных проектов</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">500,000</div>
              <div className="text-gray-600">м² покрытий</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">14</div>
              <div className="text-gray-600">Лет опыта</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">99%</div>
              <div className="text-gray-600">Довольных клиентов</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}