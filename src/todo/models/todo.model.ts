import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'todo' })
export class TodoModel {
  @Field((type) => ID)
  id: string;

  @Field()
  title: string;

  @Field({ nullable: true })
  detail?: string;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
