import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
  UseInterceptors,
  UploadedFiles,
  Put,
  Req,
  Res,
  Query,
} from '@nestjs/common';
import { Video } from '../model/video.schema';
import { VideoService } from '../service/video.service';
import { FileFieldsInterceptor } from '@nestjs/platform-express';

@Controller('/video')
export class VideoController {
  constructor(private readonly videoService: VideoService) {}

  @Post()
  @UseInterceptors(
    FileFieldsInterceptor([
      { name: 'video', maxCount: 1 },
      { name: 'cover', maxCount: 1 },
    ]),
  )
  async createBook(
    @Res() response,
    @Req() request,
    @Body() video: Video,
    @UploadedFiles()
    files: { video?: Express.Multer.File[]; cover?: Express.Multer.File[] },
  ) {
    const requestBody = {
      createdBy: request.user,
      title: video.title,
      video: files.video[0].filename,
      coverImage: files.cover[0].filename,
    };
    const newVideo = await this.videoService.createVideo(requestBody);
    return response.status(HttpStatus.CREATED).json({
      newVideo,
    });
  }

  @Get()
  async read(@Query('id') id: string): Promise<Video> {
    return await this.videoService.readVideo(id);
  }

  @Get('/:id')
  async stream(@Param('id') id: string, @Res() response, @Req() request) {
    return this.videoService.streamVideo(id, response, request);
  }
  @Put('/:id')
  async update(@Res() response, @Param('id') id: string, @Body() video: Video) {
    const updatedVideo = await this.videoService.update(id, video);
    return response.status(HttpStatus.OK).json(updatedVideo);
  }

  @Delete('/:id')
  async delete(@Res() response, @Param('id') id: string) {
    await this.videoService.delete(id);
    return response.status(HttpStatus.OK).json({
      user: null,
    });
  }
}
