"use client";

import { motion } from "motion/react";
import ProductCard from "./ProductCard";
import { useQuery } from "@tanstack/react-query";
import { ImageData, Product } from "@/types/product";
import { getImages, getProducts } from "@/lib/api";

export default function ProductSection() {
  const {
    data: products,
    isLoading: productsLoading,
    isError: productsError,
  } = useQuery<Product[]>({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  const {
    data: images,
    isLoading: imagesLoading,
    isError: imagesError,
  } = useQuery<ImageData[]>({
    queryKey: ["images"],
    queryFn: getImages,
  });

  const getImageUrl = (productId: string): string => {
    const image = images?.find((img) => img.id.includes(productId));
    return image?.image || "";
  };

  if (productsLoading || imagesLoading) {
    return <p>Loading product...</p>;
  }

  if (productsError || imagesError) {
    return <p>Error loading product</p>;
  }

  return (
    <div className="w-full bg-white p-4 sm:p-6 md:p-8" id="product">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-sm uppercase tracking-widest text-muted-foreground mb-4 block"
          >
            Collection
          </motion.span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight mb-4 text-balance">
            Our Products
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Explore our carefully curated selection of premium products designed
            to elevate your experience.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {products?.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10px" }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: "easeOut",
              }}
            >
              <ProductCard
                id={product.id}
                title={product.name ?? "Unnamed Product"}
                category={product.id}
                imageUrl={getImageUrl(product.id)}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
