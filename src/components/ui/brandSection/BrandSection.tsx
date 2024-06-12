"use client";
import { FC, useEffect, useState } from "react";
import { Box } from "@mui/material";
import { brandProviders } from "@/providers/brand-provider";
import { Brand } from "@/providers/types";
import Image from "next/image";

const BrandSection: FC = () => {
  const [brands, setBrands] = useState<Brand[]>([]);

  useEffect(() => {
    brandProviders.getList({}).then((data) => {
      setBrands(data.slice(0, 5));
    });
  }, []);

  return (
    <Box paddingBlock="2vh">
      <h5
        style={{
          fontSize: "1.4rem",
          width: "100%",
          textAlign: "center",
        }}
      >
        Explore our Populars Brands
      </h5>
      <p
        style={{
          lineHeight: "1.5",
          fontSize: "0.9rem",
          width: "100%",
          textAlign: "center",
        }}
      >
        You can see their your most popular brand in our plateforme
      </p>
      <Box
        padding="2vh 2vw"
        margin="1.5vh 1vw"
        display="flex"
        flexDirection="row"
        justifyContent="center"
      >
        {brands.map((brand) => (
          <Box
            key={brand.id}
            margin="10px"
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
          >
            <Image
              src={brand.image}
              alt={brand.name}
              width={100}
              height={100}
              style={{ objectFit: "contain" }}
            />
            <p>{brand.name}</p>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default BrandSection;
