import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [selectedExercise, setSelectedExercise] = useState<number | null>(null);

  const benefits = [
    {
      icon: "Heart",
      title: "Декомпрессия позвоночника",
      description: "Мягкое вытяжение межпозвоночных дисков снимает давление и восстанавливает естественное расстояние между позвонками"
    },
    {
      icon: "Zap",
      title: "Улучшение кровообращения",
      description: "Инверсионные позы усиливают приток крови к мозгу и внутренним органам, насыщая их кислородом"
    },
    {
      icon: "Shield",
      title: "Снятие мышечных спазмов",
      description: "Плавное растяжение расслабляет глубокие мышцы спины, устраняя хронические зажимы"
    },
    {
      icon: "Sparkles",
      title: "Коррекция осанки",
      description: "Регулярные занятия формируют правильное положение позвоночника и укрепляют мышечный корсет"
    },
    {
      icon: "Brain",
      title: "Снижение стресса",
      description: "Перевернутые позы активируют парасимпатическую нервную систему, успокаивая разум"
    },
    {
      icon: "Activity",
      title: "Повышение гибкости",
      description: "Гамак позволяет углубить растяжку и достичь большей амплитуды движений безопасно"
    }
  ];

  const exercises = [
    {
      name: "Мягкая инверсия",
      level: "Начальный",
      duration: "5-7 минут",
      description: "Лягте спиной на гамак так, чтобы поясница была поддержана тканью. Позвольте голове и ногам свободно свисать. Руки расслаблены вдоль тела. Дышите глубоко, ощущая вытяжение позвоночника.",
      benefits: ["Снятие компрессии", "Расслабление поясницы"],
      icon: "Moon"
    },
    {
      name: "Полуинверсия с поддержкой",
      level: "Средний",
      duration: "8-10 минут",
      description: "Сядьте в гамак, затем откиньтесь назад, зацепив гамак за область таза. Медленно выпрямляйте ноги, опуская голову вниз. Руки можно развести в стороны или держаться за гамак.",
      benefits: ["Улучшение кровотока", "Растяжение грудного отдела"],
      icon: "Wind"
    },
    {
      name: "Вытяжение в боковой позе",
      level: "Средний",
      duration: "6-8 минут",
      description: "Лягте боком в гамак, обняв ткань одной рукой. Противоположную ногу вытяните, создавая боковое вытяжение позвоночника. Повторите на другую сторону.",
      benefits: ["Коррекция сколиоза", "Раскрытие боковых мышц"],
      icon: "Waves"
    },
    {
      name: "Глубокая инверсия",
      level: "Продвинутый",
      duration: "3-5 минут",
      description: "Встаньте лицом к гамаку, разместите одну ногу в петле. Наклонитесь вперед, подтяните вторую ногу, повисните вниз головой. Только для опытных практиков!",
      benefits: ["Максимальная декомпрессия", "Перезагрузка нервной системы"],
      icon: "Flame"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
      <section className="relative overflow-hidden bg-gradient-to-r from-primary via-secondary to-primary py-20 px-4">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-white space-y-6 animate-fade-in">
              <Badge className="bg-accent text-white border-0 text-sm px-4 py-1">
                Здоровье позвоночника
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Йоготерапия в гамаке при остеохондрозе
              </h1>
              <p className="text-xl text-purple-100">
                Научный подход к восстановлению здоровья позвоночника через мягкую декомпрессию и глубокое расслабление
              </p>
              <div className="flex gap-4 pt-4">
                <div className="flex items-center gap-2">
                  <Icon name="Check" className="text-accent" size={20} />
                  <span className="text-sm">Без нагрузки на суставы</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Check" className="text-accent" size={20} />
                  <span className="text-sm">Научно обосновано</span>
                </div>
              </div>
            </div>
            
            <div className="relative animate-scale-in">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-secondary/20 rounded-3xl blur-2xl"></div>
              <img 
                src="https://cdn.poehali.dev/projects/116376fa-d4d6-4e2d-942d-c8cd972087fc/files/42569c8e-4380-4271-af9a-09ffe6393552.jpg" 
                alt="Йоготерапия в гамаке"
                className="relative rounded-3xl shadow-2xl w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <Badge className="bg-primary/10 text-primary border-primary/20 mb-4">
              Научные факты
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Польза для здоровья
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Исследования подтверждают эффективность йоготерапии в гамаке для лечения и профилактики остеохондроза
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <Card 
                key={index} 
                className="border-2 hover:border-primary transition-all duration-300 hover:shadow-xl hover:-translate-y-1 animate-scale-in group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 space-y-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon name={benefit.icon} className="text-white" size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <Badge className="bg-accent/10 text-accent border-accent/20 mb-4">
              Практика
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Базовые упражнения
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Начните с простых техник и постепенно переходите к более глубоким практикам
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {exercises.map((exercise, index) => (
              <Card 
                key={index}
                className={`border-2 transition-all duration-300 cursor-pointer ${
                  selectedExercise === index 
                    ? 'border-primary shadow-2xl scale-[1.02]' 
                    : 'border-border hover:border-primary/50 hover:shadow-lg'
                }`}
                onClick={() => setSelectedExercise(selectedExercise === index ? null : index)}
              >
                <CardContent className="p-8 space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                        <Icon name={exercise.icon} className="text-white" size={24} />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-foreground mb-1">
                          {exercise.name}
                        </h3>
                        <div className="flex gap-2">
                          <Badge variant="outline" className="text-xs">
                            {exercise.level}
                          </Badge>
                          <Badge variant="outline" className="text-xs">
                            <Icon name="Clock" size={12} className="mr-1" />
                            {exercise.duration}
                          </Badge>
                        </div>
                      </div>
                    </div>
                    <Icon 
                      name={selectedExercise === index ? "ChevronUp" : "ChevronDown"} 
                      className="text-muted-foreground"
                      size={24}
                    />
                  </div>

                  <div className={`transition-all duration-300 ${
                    selectedExercise === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
                  }`}>
                    <div className="pt-4 space-y-4 border-t">
                      <p className="text-muted-foreground leading-relaxed">
                        {exercise.description}
                      </p>
                      
                      <div>
                        <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                          <Icon name="Star" size={16} className="text-accent" />
                          Польза:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {exercise.benefits.map((benefit, idx) => (
                            <Badge key={idx} className="bg-accent/10 text-accent border-accent/20">
                              {benefit}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 p-8 bg-white rounded-3xl border-2 border-primary/20 animate-fade-in">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center flex-shrink-0">
                <Icon name="AlertCircle" className="text-destructive" size={24} />
              </div>
              <div>
                <h4 className="text-xl font-bold text-foreground mb-2">
                  Важные рекомендации
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  Перед началом занятий обязательно проконсультируйтесь с врачом. Противопоказания: острая фаза заболевания, грыжи, глаукома, гипертония. Занимайтесь под наблюдением сертифицированного инструктора.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gradient-to-r from-primary via-secondary to-primary text-white py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex justify-center gap-6 mb-6">
            <Icon name="Heart" size={32} className="animate-float" />
            <Icon name="Sparkles" size={32} className="animate-float" style={{ animationDelay: '0.5s' }} />
            <Icon name="Star" size={32} className="animate-float" style={{ animationDelay: '1s' }} />
          </div>
          <p className="text-lg text-purple-100">
            Забота о позвоночнике — это инвестиция в качество жизни
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
