import { pgTable, serial, text, varchar } from "drizzle-orm/pg-core";

export const MockInterview=pgTable('mockInterview',{
    id:serial('id').primaryKey(),
    jsonMockResp:text('jsonMockResp').notNull(),
    jsonPosition:varchar('jsonPosition').notNull(),
    jobDesc:varchar('jobDesc').notNull(),
    jobExperince:varchar('jobExperince').notNull(),
    createdBy:varchar('createdBy').notNull(),
    createdAt:varchar('createdAt'),
    mockId:varchar('mockId').notNull()
    

})

export const UserAnswer=pgTable('useAnswer',{
    id:serial('id').primaryKey(),
    mockIdRef:varchar("mockId").notNull(),
    question:varchar('question').notNull(),
    correctAns:text('correctAns'),
    userAns:text('userAns'),
    feedback:text('feedback'),
    rating:varchar('rating'),
    userEmail:varchar('userEmail'),
    createdAt:varchar('createdAt')
 })