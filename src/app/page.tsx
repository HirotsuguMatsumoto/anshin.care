"use client";

import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
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

const services = [
  {
    title: "アンシンアプリ",
    subtitle: "小規模事業者向け業務基盤",
    icon: InsightsOutlinedIcon,
    tone: "#0f766e",
    description:
      "勤怠、給与、サービス管理、連絡、請求を一つにつなぎ、小規模事業者の日々の運用を見える化する基盤です。",
    points: ["勤怠・給与・請求の一元化", "事業者連携と情報共有", "訪問サービス運用にも対応"]
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
    points: ["Web/API 診断", "運用に合わせた改善提案", "自社サービスでの継続検証"]
  }
];

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
    </main>
  );
}
