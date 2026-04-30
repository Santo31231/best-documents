import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { supabaseAdmin } from "@/integrations/supabase/client.server";

const leadSchema = z.object({
  name: z.string().trim().min(2, "Укажите имя").max(100),
  phone: z.string().trim().min(5, "Укажите телефон").max(30),
  email: z.string().trim().email("Неверный e-mail").max(255).optional().or(z.literal("")),
  service: z.string().trim().min(1).max(200),
  message: z.string().trim().max(2000).optional().or(z.literal("")),
  // Honeypot - must be empty
  website: z.string().max(0).optional().or(z.literal("")),
});

export const submitLead = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => leadSchema.parse(data))
  .handler(async ({ data }) => {
    if (data.website && data.website.length > 0) {
      // Silent success for bots
      return { ok: true };
    }
    const { error } = await supabaseAdmin.from("leads").insert({
      name: data.name,
      phone: data.phone,
      email: data.email ? data.email : null,
      service: data.service,
      message: data.message ? data.message : null,
    });
    if (error) {
      console.error("Lead insert error:", error);
      throw new Error("Не удалось отправить заявку. Попробуйте ещё раз или напишите в WhatsApp.");
    }
    return { ok: true };
  });
