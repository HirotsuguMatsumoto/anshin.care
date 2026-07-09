"use client";

import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import BusinessOutlinedIcon from "@mui/icons-material/BusinessOutlined";
import OpenInNewRoundedIcon from "@mui/icons-material/OpenInNewRounded";
import HealthAndSafetyOutlinedIcon from "@mui/icons-material/HealthAndSafetyOutlined";
import InsightsOutlinedIcon from "@mui/icons-material/InsightsOutlined";
import PrecisionManufacturingOutlinedIcon from "@mui/icons-material/PrecisionManufacturingOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import VerifiedUserOutlinedIcon from "@mui/icons-material/VerifiedUserOutlined";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Chip from "@mui/material/Chip";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import type { SvgIconComponent } from "@mui/icons-material";

type Service = {
  title: string;
  subtitle: string;
  icon: SvgIconComponent;
  tone: string;
  description: string;
  points: string[];
  href?: string;
};

const services: Service[] = [
  {
    title: "アンシンアプリ",
    subtitle: "小規模事業者向け業務基盤",
    icon: InsightsOutlinedIcon,
    tone: "#0f766e",
    description:
      "勤怠、給与、サービス管理、連絡、請求を一つにつなぎ、小規模事業者の日々の運用を見える化する基盤です。",
    points: ["勤怠・給与・請求の一元化", "事業者連携と情報共有", "訪問サービス運用にも対応"],
    href: "https://ads.anshin.care/"
  },
  {
    title: "介護テクノロジー",
    subtitle: "職員支援と生活支援",
    icon: PrecisionManufacturingOutlinedIcon,
    tone: "#2563eb",
    description:
      "現場課題を起点に、記録支援、見守り、服薬・予定リマインド、家族報告を PoC とアプリ連携で育てます。",
    points: ["訪問職員の負担軽減", "在宅見守り・緊急通知", "現場データによる改善"]
  },
  {
    title: "アンシン脆弱性診断",
    subtitle: "信頼性を支える継続診断",
    icon: SecurityOutlinedIcon,
    tone: "#f97316",
    description:
      "アプリ、API、管理画面、外部連携、ロボット・センサー連携を継続的に確認し、要配慮情報を扱うサービスの安全性向上を支えます。",
    points: ["Web/API 診断", "運用に合わせた改善提案", "自社サービスでの継続検証"],
    href: "https://vulne.frontend.anshin.care/"
  }
];

const companyInfoJa = [
  ["会社名", "株式会社 アンシンケアサービス"],
  ["代表取締役", "松本 裕次"],
  ["資本金", "10,000,000円"],
  ["住所", "〒135-0016 東京都江東区東陽5-26-15"],
  ["メール", "info@anshin.care"],
  ["電話番号", "03-4500-1919"],
  ["更新日", "2026年6月30日"],
  ["顧問社労士", "株式会社シーエーシー"],
  ["顧問税理士", "佐藤一義税理士事務所"],
  ["設立", "平成13年4月2日 有限会社アンシンを組織変更し設立"]
] as const;

const companyInfoEn = [
  ["Company Name", "Anshin Care Service Co., Ltd."],
  ["Representative Director", "Yuji Matsumoto"],
  ["Capital", "JPY 10,000,000"],
  ["Address", "5-26-15 Toyo, Koto-ku, Tokyo 135-0016, Japan"],
  ["Email", "info@anshin.care"],
  ["Phone", "+81-3-4500-1919"],
  ["Last Updated", "June 30, 2026"],
  ["Labor and Social Security Advisor", "CAC Co., Ltd."],
  ["Tax Advisor", "Sato Kazuyoshi Tax Accountant Office"],
  ["Established", "Established on April 2, 2001 through reorganization from Yugen Kaisha Anshin."]
] as const;

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden">
      <Box component="section" className="relative min-h-[86dvh] md:min-h-[88vh]">
        <Image
          src="/images/anshin-care-hero.png"
          alt="訪問支援とテクノロジーを表す Anshin のサービスイメージ"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <Box className="hero-scrim absolute inset-0" />

        <Container maxWidth="lg" className="relative z-10 flex min-h-[86dvh] flex-col md:min-h-[88vh]">
          <Box
            component="header"
            className="flex items-center justify-between gap-4 py-5"
          >
            <Stack direction="row" spacing={1.25} sx={{ alignItems: "center" }}>
              <Box className="flex h-9 w-9 items-center justify-center rounded-full bg-teal-700 text-white">
                <HealthAndSafetyOutlinedIcon fontSize="small" />
              </Box>
              <Typography variant="subtitle1" sx={{ fontWeight: 800 }}>
                anshin.care
              </Typography>
            </Stack>
            <Button
              href="#services"
              variant="contained"
              color="primary"
              endIcon={<ArrowForwardRoundedIcon />}
              className="whitespace-nowrap"
            >
              サービス概要
            </Button>
          </Box>

          <Box className="flex flex-1 items-center py-12 md:py-16">
            <Stack spacing={3.5} className="max-w-2xl">
              <Stack direction="row" spacing={1} sx={{ flexWrap: "wrap" }}>
                <Chip
                  icon={<VerifiedUserOutlinedIcon />}
                  label="訪問サービス x テクノロジー x セキュリティ"
                  color="primary"
                  variant="outlined"
                />
              </Stack>
              <Stack spacing={2}>
                <Typography
                  variant="h1"
                  className="text-[clamp(2.55rem,7vw,5.8rem)] leading-[1.02]"
                >
                  Anshin service overview
                </Typography>
                <Typography
                  variant="h2"
                  component="p"
                  className="text-[clamp(1.18rem,2.7vw,2rem)] leading-[1.45]"
                  color="text.secondary"
                >
                  訪問サービスの現場運用を、経営支援、生活支援テクノロジー、継続診断でつなぐ。
                </Typography>
              </Stack>
              <Typography
                variant="body1"
                className="max-w-xl text-base leading-8 md:text-lg"
                color="text.secondary"
              >
                アンシンアプリを中心に、訪問職員の負担軽減、在宅利用者の安心、要配慮情報を扱うサービスの信頼性向上を一体で支えます。
              </Typography>
              <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5}>
                <Button
                  href="#services"
                  size="large"
                  variant="contained"
                  color="primary"
                  endIcon={<ArrowForwardRoundedIcon />}
                >
                  3つのサービスを見る
                </Button>
                <Button href="#concept" size="large" variant="outlined" color="primary">
                  構想を見る
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Container>
      </Box>

      <Box id="services" component="section" className="bg-white py-14 md:py-20">
        <Container maxWidth="lg">
          <Stack spacing={2.5} className="mb-9 max-w-3xl">
            <Box className="surface-line h-1 w-24 rounded-full" />
            <Typography variant="h2" className="text-3xl md:text-5xl">
              3つの入口
            </Typography>
            <Typography variant="body1" color="text.secondary" className="text-base leading-8 md:text-lg">
              詳細な機能を並べるのではなく、Anshin が何を支えるサービスなのかを最初に伝えるための概要です。
            </Typography>
          </Stack>

          <Grid container spacing={3}>
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <Grid key={service.title} size={{ xs: 12, sm: 12, md: 6, lg: 4 }}>
                  <Card className="h-full">
                    <CardContent className="flex h-full flex-col gap-5 p-6 md:p-7">
                      <Stack direction="row" spacing={2} sx={{ alignItems: "center" }}>
                        <Box
                          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg text-white"
                          sx={{ backgroundColor: service.tone }}
                        >
                          <Icon />
                        </Box>
                        <Stack spacing={0.5} sx={{ minWidth: 0 }}>
                          <Typography variant="h3" className="text-2xl">
                            {service.title}
                          </Typography>
                          <Typography variant="subtitle1" color="text.secondary" sx={{ fontWeight: 700 }}>
                            {service.subtitle}
                          </Typography>
                        </Stack>
                      </Stack>
                      <Typography variant="body1" color="text.secondary" className="leading-8">
                        {service.description}
                      </Typography>
                      <Stack spacing={1.25} className="mt-auto">
                        {service.points.map((point) => (
                          <Stack key={point} direction="row" spacing={1.25} sx={{ alignItems: "center" }}>
                            <Box
                              className="h-2.5 w-2.5 rounded-full"
                              sx={{ backgroundColor: service.tone }}
                            />
                            <Typography variant="body2" color="text.secondary">
                              {point}
                            </Typography>
                          </Stack>
                        ))}
                        {service.href ? (
                          <Button
                            href={service.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            variant="outlined"
                            color="primary"
                            endIcon={<OpenInNewRoundedIcon />}
                            className="mt-3 self-start"
                          >
                            サイトを見る
                          </Button>
                        ) : null}
                      </Stack>
                    </CardContent>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </Box>

      <Box id="concept" component="section" className="py-14 md:py-20">
        <Container maxWidth="lg">
          <Box className="grid gap-8 md:grid-cols-[1fr_1.1fr] md:items-center">
            <Stack spacing={2.5}>
              <Box className="surface-line h-1 w-24 rounded-full" />
              <Typography variant="h2" className="text-3xl md:text-5xl">
                人が支える現場を、仕組みで強くする。
              </Typography>
            </Stack>
            <Stack spacing={2.5}>
              <Typography variant="body1" color="text.secondary" className="text-base leading-8 md:text-lg">
                Anshin の土台は、現場です。日々の訪問、記録、連絡、請求、改善をアプリでつなぎ、職員支援と生活支援のテクノロジーを現場で検証します。
              </Typography>
              <Typography variant="body1" color="text.secondary" className="text-base leading-8 md:text-lg">
                さらに、アプリや API、外部連携を継続的に診断することで、要配慮情報を扱うサービスとしての信頼性を高め続けます。
              </Typography>
            </Stack>
          </Box>
        </Container>
      </Box>

      <Box component="section" className="bg-white py-14 md:py-20">
        <Container maxWidth="lg">
          <Stack spacing={2.5} className="mb-9 max-w-3xl">
            <Box className="surface-line h-1 w-24 rounded-full" />
            <Stack direction="row" spacing={1.5} sx={{ alignItems: "center" }}>
              <Box className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-teal-700 text-white">
                <BusinessOutlinedIcon />
              </Box>
              <Typography variant="h2" className="text-3xl md:text-5xl">
                会社情報
              </Typography>
            </Stack>
            <Typography variant="body1" color="text.secondary" className="text-base leading-8 md:text-lg">
              Anshin Care Service の基本情報です。英語表記も併記しています。
            </Typography>
          </Stack>

          <Grid container spacing={3}>
            {[
              { heading: "日本語", items: companyInfoJa },
              { heading: "English", items: companyInfoEn }
            ].map((section) => (
              <Grid key={section.heading} size={{ xs: 12, md: 6 }}>
                <Card className="h-full">
                  <CardContent className="p-6 md:p-7">
                    <Stack spacing={2.5}>
                      <Typography variant="h3" className="text-2xl">
                        {section.heading}
                      </Typography>
                      <Box component="dl" className="m-0 grid gap-0">
                        {section.items.map(([label, value]) => (
                          <Box
                            key={label}
                            className="grid gap-1 border-t border-slate-200 py-3 sm:grid-cols-[11rem_1fr] sm:gap-4"
                          >
                            <Typography
                              component="dt"
                              variant="body2"
                              color="text.secondary"
                              sx={{ fontWeight: 700 }}
                            >
                              {label}
                            </Typography>
                            <Typography
                              component="dd"
                              variant="body2"
                              className="m-0 leading-7"
                              sx={{ overflowWrap: "anywhere" }}
                            >
                              {value}
                            </Typography>
                          </Box>
                        ))}
                      </Box>
                    </Stack>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </main>
  );
}
