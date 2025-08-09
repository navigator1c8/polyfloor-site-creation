import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import Icon from '@/components/ui/icon';

export default function Calculator() {
  const [area, setArea] = useState<number>(100);
  const [coatingType, setCoatingType] = useState<string>('');
  const [thickness, setThickness] = useState<number[]>([3]);
  const [preparation, setPreparation] = useState<boolean>(false);
  const [primer, setPrimer] = useState<boolean>(false);
  const [decorative, setDecorative] = useState<boolean>(false);
  const [antiStatic, setAntiStatic] = useState<boolean>(false);
  const [calculated, setCalculated] = useState<boolean>(false);

  const coatingTypes = [
    { 
      id: 'epoxy', 
      name: 'Эпоксидное покрытие', 
      basePrice: 1200, 
      description: 'Высокопрочное промышленное покрытие',
      minThickness: 2,
      maxThickness: 10
    },
    { 
      id: 'polyurethane', 
      name: 'Полиуретановое покрытие', 
      basePrice: 800, 
      description: 'Эластичное декоративное покрытие',
      minThickness: 1,
      maxThickness: 5
    },
    { 
      id: 'leveling', 
      name: 'Наливной пол', 
      basePrice: 600, 
      description: 'Самовыравнивающийся состав',
      minThickness: 3,
      maxThickness: 15
    },
    { 
      id: 'decorative', 
      name: 'Декоративное покрытие', 
      basePrice: 1500, 
      description: '3D эффекты и художественные решения',
      minThickness: 2,
      maxThickness: 8
    }
  ];

  const calculatePrice = () => {
    if (!coatingType || !area) return 0;

    const selectedCoating = coatingTypes.find(c => c.id === coatingType);
    if (!selectedCoating) return 0;

    let totalPrice = selectedCoating.basePrice * area;

    // Коэффициент толщины
    const thicknessCoeff = thickness[0] / 3;
    totalPrice *= thicknessCoeff;

    // Дополнительные услуги
    if (preparation) totalPrice += area * 300;
    if (primer) totalPrice += area * 150;
    if (decorative) totalPrice += area * 500;
    if (antiStatic) totalPrice += area * 400;

    // Скидка за объем
    if (area > 1000) totalPrice *= 0.9;
    else if (area > 500) totalPrice *= 0.95;

    return Math.round(totalPrice);
  };

  const handleCalculate = () => {
    setCalculated(true);
  };

  const selectedCoating = coatingTypes.find(c => c.id === coatingType);
  const totalPrice = calculatePrice();
  const pricePerSqm = area > 0 ? Math.round(totalPrice / area) : 0;

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
            <Badge className="bg-blue-100 text-blue-800 border-blue-200">Калькулятор стоимости</Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900">
              Рассчитайте стоимость{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                полимерного покрытия
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Получите предварительную стоимость за 2 минуты. 
              Точный расчет после выезда технолога на объект.
            </p>
          </div>
        </div>
      </section>

      {/* Calculator */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Calculator Form */}
            <div className="lg:col-span-2 space-y-8">
              <Card className="shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl">Параметры проекта</CardTitle>
                  <CardDescription>
                    Заполните основные характеристики вашего объекта
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-8">
                  {/* Area */}
                  <div>
                    <label className="block text-lg font-semibold text-gray-900 mb-4">
                      Площадь покрытия (м²) *
                    </label>
                    <Input
                      type="number"
                      value={area}
                      onChange={(e) => setArea(Number(e.target.value))}
                      placeholder="Введите площадь"
                      className="text-lg h-12"
                    />
                    <p className="text-sm text-gray-600 mt-2">
                      Минимальная площадь для расчета: 10 м²
                    </p>
                  </div>

                  {/* Coating Type */}
                  <div>
                    <label className="block text-lg font-semibold text-gray-900 mb-4">
                      Тип покрытия *
                    </label>
                    <Select value={coatingType} onValueChange={setCoatingType}>
                      <SelectTrigger className="text-lg h-12">
                        <SelectValue placeholder="Выберите тип покрытия" />
                      </SelectTrigger>
                      <SelectContent>
                        {coatingTypes.map((type) => (
                          <SelectItem key={type.id} value={type.id}>
                            <div>
                              <div className="font-semibold">{type.name}</div>
                              <div className="text-sm text-gray-600">{type.description}</div>
                              <div className="text-sm text-blue-600">от {type.basePrice} ₽/м²</div>
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Thickness */}
                  {selectedCoating && (
                    <div>
                      <label className="block text-lg font-semibold text-gray-900 mb-4">
                        Толщина покрытия: {thickness[0]} мм
                      </label>
                      <Slider
                        value={thickness}
                        onValueChange={setThickness}
                        min={selectedCoating.minThickness}
                        max={selectedCoating.maxThickness}
                        step={0.5}
                        className="w-full"
                      />
                      <div className="flex justify-between text-sm text-gray-600 mt-2">
                        <span>{selectedCoating.minThickness} мм</span>
                        <span>{selectedCoating.maxThickness} мм</span>
                      </div>
                    </div>
                  )}

                  {/* Additional Services */}
                  <div>
                    <label className="block text-lg font-semibold text-gray-900 mb-4">
                      Дополнительные услуги
                    </label>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <Checkbox
                          id="preparation"
                          checked={preparation}
                          onCheckedChange={setPreparation}
                        />
                        <label htmlFor="preparation" className="text-gray-700">
                          Подготовка основания (+300 ₽/м²)
                        </label>
                      </div>
                      
                      <div className="flex items-center space-x-3">
                        <Checkbox
                          id="primer"
                          checked={primer}
                          onCheckedChange={setPrimer}
                        />
                        <label htmlFor="primer" className="text-gray-700">
                          Грунтование (+150 ₽/м²)
                        </label>
                      </div>
                      
                      <div className="flex items-center space-x-3">
                        <Checkbox
                          id="decorative"
                          checked={decorative}
                          onCheckedChange={setDecorative}
                        />
                        <label htmlFor="decorative" className="text-gray-700">
                          Декоративные добавки (+500 ₽/м²)
                        </label>
                      </div>
                      
                      <div className="flex items-center space-x-3">
                        <Checkbox
                          id="antiStatic"
                          checked={antiStatic}
                          onCheckedChange={setAntiStatic}
                        />
                        <label htmlFor="antiStatic" className="text-gray-700">
                          Антистатические свойства (+400 ₽/м²)
                        </label>
                      </div>
                    </div>
                  </div>

                  <Button
                    onClick={handleCalculate}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg py-3"
                    disabled={!coatingType || !area || area < 10}
                  >
                    <Icon name="Calculator" className="w-5 h-5 mr-2" />
                    Рассчитать стоимость
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Results */}
            <div className="space-y-8">
              {calculated && totalPrice > 0 && (
                <Card className="shadow-xl border-2 border-blue-200">
                  <CardHeader className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-t-lg">
                    <CardTitle className="text-2xl">Расчет стоимости</CardTitle>
                    <CardDescription className="text-blue-100">
                      Предварительная стоимость проекта
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-6 space-y-6">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-gray-900 mb-2">
                        {totalPrice.toLocaleString()} ₽
                      </div>
                      <div className="text-lg text-gray-600">
                        {pricePerSqm.toLocaleString()} ₽/м²
                      </div>
                    </div>

                    <div className="space-y-3 pt-4 border-t">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Площадь:</span>
                        <span className="font-semibold">{area} м²</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Тип покрытия:</span>
                        <span className="font-semibold">{selectedCoating?.name}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Толщина:</span>
                        <span className="font-semibold">{thickness[0]} мм</span>
                      </div>
                      {area > 500 && (
                        <div className="flex justify-between text-green-600">
                          <span>Скидка за объем:</span>
                          <span className="font-semibold">
                            {area > 1000 ? '10%' : '5%'}
                          </span>
                        </div>
                      )}
                    </div>

                    <div className="space-y-3">
                      <Button className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700">
                        <Icon name="Phone" className="w-5 h-5 mr-2" />
                        Заказать звонок
                      </Button>
                      <Button variant="outline" className="w-full">
                        <Icon name="Download" className="w-5 h-5 mr-2" />
                        Скачать смету
                      </Button>
                    </div>

                    <div className="text-xs text-gray-500 text-center">
                      * Точная стоимость определяется после выезда технолога
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Info Cards */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Icon name="Info" className="w-5 h-5 mr-2 text-blue-600" />
                    Что влияет на стоимость?
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <Icon name="CheckCircle" className="w-5 h-5 text-green-600 mt-0.5" />
                    <span className="text-sm text-gray-700">Тип и качество основания</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Icon name="CheckCircle" className="w-5 h-5 text-green-600 mt-0.5" />
                    <span className="text-sm text-gray-700">Сложность геометрии помещения</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Icon name="CheckCircle" className="w-5 h-5 text-green-600 mt-0.5" />
                    <span className="text-sm text-gray-700">Требования к декоративности</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Icon name="CheckCircle" className="w-5 h-5 text-green-600 mt-0.5" />
                    <span className="text-sm text-gray-700">Сроки выполнения работ</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
                <CardHeader>
                  <CardTitle className="flex items-center text-blue-900">
                    <Icon name="Gift" className="w-5 h-5 mr-2" />
                    Бесплатно для вас
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <Icon name="CheckCircle" className="w-5 h-5 text-blue-600 mt-0.5" />
                    <span className="text-sm text-gray-700">Выезд технолога на объект</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Icon name="CheckCircle" className="w-5 h-5 text-blue-600 mt-0.5" />
                    <span className="text-sm text-gray-700">Замер и обследование основания</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Icon name="CheckCircle" className="w-5 h-5 text-blue-600 mt-0.5" />
                    <span className="text-sm text-gray-700">Составление подробной сметы</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Icon name="CheckCircle" className="w-5 h-5 text-blue-600 mt-0.5" />
                    <span className="text-sm text-gray-700">Консультация по материалам</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-blue-100 text-blue-800 border-blue-200">Вопросы по расчету</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Часто задаваемые вопросы
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                question: "Насколько точен онлайн-расчет?",
                answer: "Онлайн-калькулятор дает предварительную стоимость с точностью ±15%. Окончательная цена определяется после выезда технолога."
              },
              {
                question: "Что входит в стоимость работ?",
                answer: "В стоимость входят материалы, работа, доставка материалов и вывоз мусора. Подготовка основания рассчитывается отдельно."
              },
              {
                question: "Есть ли скидки за большие объемы?",
                answer: "Да, при площади от 500 м² - скидка 5%, от 1000 м² - скидка 10%. Для особо крупных объектов возможны индивидуальные условия."
              },
              {
                question: "Можно ли изменить расчет после заключения договора?",
                answer: "Изменения возможны только при изменении технического задания. Все изменения оформляются дополнительным соглашением."
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