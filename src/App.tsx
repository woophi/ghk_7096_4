import { Button } from '@alfalab/core-components/button/cssm';
import { Collapse } from '@alfalab/core-components/collapse/cssm';
import { Gap } from '@alfalab/core-components/gap/cssm';
import { PureCell } from '@alfalab/core-components/pure-cell/cssm';
import { Typography } from '@alfalab/core-components/typography/cssm';
import { BriefcaseMIcon } from '@alfalab/icons-glyph/BriefcaseMIcon';
import { BubbleLinesMIcon } from '@alfalab/icons-glyph/BubbleLinesMIcon';
import { ChartColumnThreeAscArrowMIcon } from '@alfalab/icons-glyph/ChartColumnThreeAscArrowMIcon';
import { ChevronDownMIcon } from '@alfalab/icons-glyph/ChevronDownMIcon';
import { ChevronUpMIcon } from '@alfalab/icons-glyph/ChevronUpMIcon';
import { CrownMIcon } from '@alfalab/icons-glyph/CrownMIcon';
import { ShieldMIcon } from '@alfalab/icons-glyph/ShieldMIcon';
import { SquareAcademicCapMIcon } from '@alfalab/icons-glyph/SquareAcademicCapMIcon';
import { StarPointerMIcon } from '@alfalab/icons-glyph/StarPointerMIcon';
import { useEffect, useState } from 'react';
import expert from './assets/expert.png';
import hb from './assets/hb.png';
import oneImg from './assets/one.png';
import stud1 from './assets/stud_1.png';
import stud2 from './assets/stud_2.png';
import stud3 from './assets/stud_3.png';
import stud4 from './assets/stud_4.png';
import threeImg from './assets/three.png';
import twoImg from './assets/two.png';
import { LS, LSKeys } from './ls';
import { appSt } from './style.css';

const LINK =
  'a-investments:///sdui_screen?screenName=InvestmentLongread&fromCurrent=true&shouldUseBottomSafeArea=true&endpoint=v1/invest-main-screen-view/investment-longread/94358%3flocation=AM%26campaignCode=GH';

if (LS.getItem(LSKeys.ShowThx, false)) {
  window.location.replace(LINK);
}

const itemsWG = [
  {
    icon: <ShieldMIcon />,
    title: 'Страховку от потерь на фондовом рынке на 30 дней',
  },
  {
    icon: <BubbleLinesMIcon />,
    title: 'В социальной сети Альфа-Инвестиции статус участника, прошедшего обучающий трек от Альфа-Банка',
  },
  {
    icon: <ChartColumnThreeAscArrowMIcon />,
    title: 'Возможность поделиться успехами в обучении и инвестировании с родителями и друзьями',
  },
  {
    icon: <StarPointerMIcon />,
    title: 'Стикер на смартфон с эксклюзивным дизайном для оплаты покупок',
  },
];
const itemsExpert = [
  {
    icon: <BriefcaseMIcon width={16} height={16} />,
    title: 'Опыт работы',
    text: 'Опыт с 2011 года. Общий стаж работы с клиентами Альфа‑Банка составляет более 4 лет.',
  },
  {
    icon: <CrownMIcon width={16} height={16} />,
    title: 'Специализация',
    text: 'Анализ рыночных взаимосвязей, с углубленным изучением финансового менеджмента компаний и технического анализа',
  },
  {
    icon: <SquareAcademicCapMIcon width={16} height={16} />,
    title: 'Образование',
    text: 'Диплом с отличием Финансового Университета РФ и Бакалавриат Американского Университета Bloomsburg University of State PA',
  },
];

const faqs = [
  {
    question: 'С какого возраста можно учиться?',
    answers: ['Рекомендуем с 14 лет, так как открыть брокерский счет на свое имя можно только с 14 лет'],
  },
  {
    question: 'Сколько длится обучение?',
    answers: ['Первый поток длится 30 дней'],
  },
  {
    question: 'Возможно ли продолжить обучение?',
    answers: ['Да, будет доступен дополнительный поток для желающих получить дополнительные углубленные знания'],
  },
  {
    question: 'Какую максимальную сумму можно инвестировать?',
    answers: ['Максимальная сумма инвестиций без согласия родителя — 5 000₽, с согласия родителя — 30 000₽'],
  },
];

export const App = () => {
  const [loading, setLoading] = useState(false);
  const [collapsedItems, setCollapsedItem] = useState<string[]>([]);

  useEffect(() => {
    if (!LS.getItem(LSKeys.UserId, null)) {
      LS.setItem(LSKeys.UserId, Date.now());
    }
  }, []);

  const submit = () => {
    window.gtag('event', '7096_child_payment', { var: 'var4' });
    setLoading(true);
    //  LS.setItem(LSKeys.ShowThx, true);
    setLoading(false);
    window.location.replace(LINK);
  };

  return (
    <>
      <div className={appSt.container}>
        <img src={hb} width="100%" height={238} alt="hb" style={{ objectFit: 'contain', margin: '0 auto' }} />
        <Typography.TitleResponsive tag="h1" view="medium" font="system" weight="semibold">
          Обучение инвестициям с наставником за 30 дней
        </Typography.TitleResponsive>
        <Typography.Text view="primary-medium" color="secondary">
          Для вашего ребенка от 14 лет с одним из лучших инвестиционных брокеров Альфа-Банка
        </Typography.Text>

        <Typography.TitleResponsive style={{ marginTop: '12px' }} tag="h2" view="small" font="system" weight="medium">
          Чему научится ваш ребенок
        </Typography.TitleResponsive>

        <PureCell>
          <PureCell.Graphics verticalAlign="center">
            <img src={oneImg} width={46} height={46} alt="цифра 1" />
          </PureCell.Graphics>
          <PureCell.Content>
            <PureCell.Main>
              <Typography.Text view="primary-small" weight="bold">
                Понимать инвестиции
              </Typography.Text>
              <Typography.Text view="primary-small">
                Разберётся как работают акции, фонды и облигации — без заумных слов
              </Typography.Text>
            </PureCell.Main>
          </PureCell.Content>
        </PureCell>
        <PureCell>
          <PureCell.Graphics verticalAlign="center">
            <img src={twoImg} width={46} height={46} alt="цифра 2" />
          </PureCell.Graphics>
          <PureCell.Content>
            <PureCell.Main>
              <Typography.Text view="primary-small" weight="bold">
                Управлять рисками
              </Typography.Text>
              <Typography.Text view="primary-small">
                Научится не ставить всё на одну карту и защищать свои деньги
              </Typography.Text>
            </PureCell.Main>
          </PureCell.Content>
        </PureCell>
        <PureCell>
          <PureCell.Graphics verticalAlign="center">
            <img src={threeImg} width={46} height={46} alt="цифра 3" />
          </PureCell.Graphics>
          <PureCell.Content>
            <PureCell.Main>
              <Typography.Text view="primary-small" weight="bold">
                Контролировать эмоции
              </Typography.Text>
              <Typography.Text view="primary-small">
                Поймёт как не паниковать при падении и не терять голову при росте
              </Typography.Text>
            </PureCell.Main>
          </PureCell.Content>
        </PureCell>

        <Typography.TitleResponsive style={{ marginTop: '12px' }} tag="h2" view="small" font="system" weight="medium">
          Что получит в конце обучения
        </Typography.TitleResponsive>
        {itemsWG.map((item, index) => (
          <PureCell key={index}>
            <PureCell.Graphics verticalAlign="top">{item.icon}</PureCell.Graphics>
            <PureCell.Content>
              <PureCell.Main>
                <Typography.Text view="primary-medium">{item.title}</Typography.Text>
              </PureCell.Main>
            </PureCell.Content>
          </PureCell>
        ))}

        <Typography.TitleResponsive style={{ marginTop: '12px' }} tag="h2" view="small" font="system" weight="medium">
          Кто будет наставником
        </Typography.TitleResponsive>

        <div className={appSt.box}>
          <PureCell>
            <PureCell.Graphics verticalAlign="center">
              <img src={expert} width={46} height={46} alt="эксперт" />
            </PureCell.Graphics>
            <PureCell.Content>
              <PureCell.Main>
                <Typography.TitleResponsive tag="h3" view="xsmall" font="system" weight="medium">
                  Илья Шевченко
                </Typography.TitleResponsive>
                <Typography.Text view="secondary-large" color="secondary">
                  Финансовый эксперт · Альфа-Банк
                </Typography.Text>
              </PureCell.Main>
            </PureCell.Content>
          </PureCell>

          {itemsExpert.map((item, index) => (
            <PureCell key={index}>
              <PureCell.Graphics verticalAlign="top">{item.icon}</PureCell.Graphics>
              <PureCell.Content>
                <PureCell.Main>
                  <Typography.Text view="secondary-large" weight="medium">
                    {item.title}
                  </Typography.Text>
                  <Gap size={8} />
                  <Typography.Text view="secondary-large" color="secondary">
                    {item.text}
                  </Typography.Text>
                </PureCell.Main>
              </PureCell.Content>
            </PureCell>
          ))}
        </div>

        <Typography.TitleResponsive style={{ marginTop: '12px' }} tag="h2" view="small" font="system" weight="medium">
          Что в рамках обучения
        </Typography.TitleResponsive>

        <PureCell className={appSt.box2}>
          <PureCell.Content>
            <PureCell.Main>
              <Typography.TitleResponsive tag="h3" view="xsmall" font="system" weight="medium">
                Прямые эфиры с персональным брокером
              </Typography.TitleResponsive>
              <Typography.Text view="secondary-large" color="secondary">
                Записи эфиров будут доступны в приложении Альфа-Инвестиций
              </Typography.Text>
            </PureCell.Main>
          </PureCell.Content>
          <PureCell.Graphics verticalAlign="center">
            <img src={stud1} width={90} height={110} alt="эксперт" />
          </PureCell.Graphics>
        </PureCell>

        <PureCell className={appSt.box2}>
          <PureCell.Content>
            <PureCell.Main>
              <Typography.TitleResponsive tag="h3" view="xsmall" font="system" weight="medium">
                Доступ к рекомендациям и стратегиям от наставника
              </Typography.TitleResponsive>
              <Typography.Text view="secondary-large" color="secondary">
                Готовые стратегии от наставника для минимизации рисков и повышения доходности портфеля
              </Typography.Text>
            </PureCell.Main>
          </PureCell.Content>
          <PureCell.Graphics verticalAlign="center">
            <img src={stud2} width={90} height={130} alt="эксперт" />
          </PureCell.Graphics>
        </PureCell>

        <PureCell className={appSt.box2}>
          <PureCell.Content>
            <PureCell.Main>
              <Typography.TitleResponsive tag="h3" view="xsmall" font="system" weight="medium">
                Легкое и понятное обучение
              </Typography.TitleResponsive>
              <Typography.Text view="secondary-large" color="secondary">
                Краткий и доступный формат
              </Typography.Text>
            </PureCell.Main>
          </PureCell.Content>
          <PureCell.Graphics verticalAlign="center">
            <img src={stud3} width={99} height={90} alt="эксперт" />
          </PureCell.Graphics>
        </PureCell>

        <PureCell className={appSt.box2}>
          <PureCell.Content>
            <PureCell.Main>
              <Typography.TitleResponsive tag="h3" view="xsmall" font="system" weight="medium">
                Доступ к закрытому каналу наставника
              </Typography.TitleResponsive>
              <Typography.Text view="secondary-large" color="secondary">
                Обсуждение сигналов на фондовом рынке и доступ к портфелю наставника
              </Typography.Text>
            </PureCell.Main>
          </PureCell.Content>
          <PureCell.Graphics verticalAlign="center">
            <img src={stud4} width={106} height={130} alt="эксперт" />
          </PureCell.Graphics>
        </PureCell>

        <Typography.TitleResponsive style={{ marginTop: '12px' }} tag="h2" view="small" font="system" weight="medium">
          Дополнительные вопросы
        </Typography.TitleResponsive>

        {faqs.map((faq, index) => (
          <div key={index}>
            <div
              onClick={() => {
                window.gtag('event', '7096_children_faq', { faq: String(index + 1), var: 'var4' });

                setCollapsedItem(items =>
                  items.includes(String(index + 1))
                    ? items.filter(item => item !== String(index + 1))
                    : [...items, String(index + 1)],
                );
              }}
              className={appSt.rowSb}
            >
              <Typography.Text view="primary-medium" weight="medium">
                {faq.question}
              </Typography.Text>
              {collapsedItems.includes(String(index + 1)) ? (
                <div style={{ flexShrink: 0 }}>
                  <ChevronUpMIcon />
                </div>
              ) : (
                <div style={{ flexShrink: 0 }}>
                  <ChevronDownMIcon />
                </div>
              )}
            </div>
            <Collapse expanded={collapsedItems.includes(String(index + 1))}>
              {faq.answers.map((answerPart, answerIndex) => (
                <Typography.Text key={answerIndex} tag="p" defaultMargins={false} view="primary-medium">
                  {answerPart}
                </Typography.Text>
              ))}
            </Collapse>
          </div>
        ))}
      </div>
      <Gap size={96} />

      <div className={appSt.bottomBtn}>
        <Button loading={loading} block view="primary" onClick={submit}>
          Оплатить курс обучения ребенка
          <br />
          499 ₽
        </Button>
      </div>
    </>
  );
};
