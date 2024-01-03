import {logger} from '../app'

export const canCreateDocument = async (
  mongooseModel: any,
  limit = 20,
  filters = {}
): Promise<boolean | undefined> => {
  try {
    if (!mongooseModel) {
      throw new Error('No mongoose model provided. Cannot proceed.')
    }
    const documentsCount = await mongooseModel.countDocuments(filters)

    return !(documentsCount >= limit)
  } catch (error: any) {
    logger.error(`[canCreateDocument]: ${error}`)
  }
}
